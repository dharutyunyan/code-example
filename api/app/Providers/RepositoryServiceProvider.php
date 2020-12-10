<?php

namespace App\Providers;

use App\Repositories\Cached\CachedCategoryRepository;
use App\Repositories\Eloquent\CategoryRepository;
use App\Repositories\CategoryRepositoryInterface;
use App\Models\Category\Category;

use App\Repositories\Cached\CachedProductRepository;
use App\Repositories\Eloquent\ProductRepository;
use App\Repositories\ProductRepositoryInterface;
use App\Models\Product\Product;


use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(CategoryRepositoryInterface::class, function () {
            return new CachedCategoryRepository(
                new CategoryRepository(
                    new Category()
                ),
                $this->app['cache.store']
            );
        });

        $this->app->singleton(ProductRepositoryInterface::class, function () {
            return new CachedProductRepository(
                new ProductRepository(
                    new Product()
                ),
                $this->app['cache.store']
            );
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
