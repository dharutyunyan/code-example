<?php
namespace App\Repositories;

use Illuminate\Support\Collection;
use App\Repositories\BaseRepositoryInterface;
/**
 * Interface ProductRepositoryInterface
 */
interface CategoryRepositoryInterface
{
    /**
     * @return Collection
     */
    public function all(): Collection;
}
