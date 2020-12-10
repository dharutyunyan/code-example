<?php

namespace App\Actions;

use Illuminate\Cache\Repository as Cache;

trait ActionTrait
{
    /**
     * @var Cache
     */

    /**
     * Action constructor.
     * @param Cache $cache
     */
    public function __construct(Cache $cache)
    {
        $this->cache = $cache;
    }
}
