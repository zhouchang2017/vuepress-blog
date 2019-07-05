---
layout: Homepage
name: abc
---


# Hello world!

Hello from VuePress.


```php
    /**
     * Bootstrap any package services.
     *
     * @return void
     */
    public function boot()
    {
        if ( !$this->app->configurationIsCached()) {
            $this->mergeConfigFrom(__DIR__ . '/../config/admin.php', 'admin');
        }

        // 注册 一组中间件
        Route::middlewareGroup('admin', config('admin.middleware', []));
    }
```