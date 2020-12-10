<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Actions\CategoryAction;
use App\Actions\Contracts\CategoryActionContract;
use App\Actions\ProductAction;
use App\Actions\Contracts\ProductActionContract;

class ActionServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(CategoryActionContract::class, CategoryAction::class);
        $this->app->bind(ProductActionContract::class, ProductAction::class);
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
