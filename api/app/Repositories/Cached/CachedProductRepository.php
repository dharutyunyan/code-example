<?php

namespace App\Repositories\Cached;

use Illuminate\Contracts\Cache\Repository as Cache;
use App\Repositories\ProductRepositoryInterface;

class CachedProductRepository implements ProductRepositoryInterface
{
    const tag = 'products';
    const lifetime = 3000;

    use CachedRepositoryTrait;
}
