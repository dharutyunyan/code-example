<?php

namespace App\Repositories\Cached;

use Illuminate\Cache\Repository as Cache;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Model;
use App\Repositories\RepositoryInterface;

trait CachedRepositoryTrait
{

    /**
     * @var RepositoryInterface
     */


    /**
     * @var Cache
     */


    /**
     * RepositoryCaching constructor.
     * @param Repository $repo
     * @param Cache $cache
     */
    public function __construct(RepositoryInterface $repo, Cache $cache)
    {
        $this->repo = $repo;
        $this->cache = $cache;
    }

    /**
    * @return Collection
    */
    public function all() : Collection
    {
    	return $this->cache->tags(self::tag)->remember(self::tag . '_list', self::lifetime, function(){
    		return $this->repo->all();
    	});
    }

    /**
    * @param $id
    * @return Model
    */
    public function find($id): ?Model
    {
        return $this->cache->tags(self::tag)->remember(self::tag . '_' . $id, self::lifetime, function () use ($id) {
    		return $this->repo->find($id);
    	});
    }
}
