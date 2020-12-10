<?php

namespace App\Repositories\Cached;

use Illuminate\Contracts\Cache\Repository as Cache;
use App\Repositories\CategoryRepositoryInterface;

class CachedCategoryRepository implements CategoryRepositoryInterface
{
    const tag = 'categories';
    const lifetime = 3000;

    use CachedRepositoryTrait;
}
