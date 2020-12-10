<?php

namespace App\Repositories\Eloquent;

use Illuminate\Support\Collection;
use App\Repositories\ProductRepositoryInterface;
use App\Repositories\Eloquent\Repository;
use App\Models\Product\Product;

class ProductRepository extends Repository implements ProductRepositoryInterface
{
	/**
    * CategoryRepository constructor.
    *
    * @param Product $model
    */
	public function __construct(Product $model)
	{
	   parent::__construct($model);
	}

	/**
	* @return Collection
	*/
	public function all(): Collection
	{
		return $this->model->with('category')->get();
	}

}
