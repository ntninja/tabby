use anyhow::{anyhow, Result};
use dataset::reload_index;
use kv::{Bucket, Config, Json, Store};
use tabby_common::{config::RepositoryConfig, SourceFile};

mod dataset;

type RepositoryBucket<'a> = Bucket<'a, String, Json<SourceFile>>;

pub struct RepositoryCache {
    cache: Store,
}

impl RepositoryCache {
    pub fn new() -> Result<Self> {
        let config = Config::new(tabby_common::path::repository_meta_db());
        let store = Store::new(config)?;
        Ok(RepositoryCache { cache: store })
    }

    fn bucket(&self) -> Result<RepositoryBucket> {
        Ok(self.cache.bucket(Some("repositories"))?)
    }

    pub fn clear(&self) -> Result<()> {
        self.bucket()?.clear()?;
        Ok(())
    }

    pub fn add_repository_meta(&self, file: SourceFile) -> Result<()> {
        let key = format!("{}:{}", file.repository_name, file.filepath);
        self.bucket()?.set(&key, &Json(file))?;
        Ok(())
    }

    pub fn get_repository_meta(&self, repository_name: &str, filepath: &str) -> Result<SourceFile> {
        let key = format!("{repository_name}:{filepath}");
        let Some(Json(val)) = self.bucket()?.get(&key)? else {
            return Err(anyhow!("Repository meta not found"));
        };
        Ok(val)
    }

    pub fn reload(&self, repositories: &[RepositoryConfig]) -> Result<()> {
        reload_index(&self, repositories)
    }
}
