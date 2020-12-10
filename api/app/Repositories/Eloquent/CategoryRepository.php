<?php

namespace App\Repositories\Eloquent;

use Illuminate\Support\Collection;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\Eloquent\Repository;
use App\Models\Category\Category;

class CategoryRepository extends Repository implements CategoryRepositoryInterface
{
	/**
    * CategoryRepository constructor.
    *
    * @param Category $model
    */
	public function __construct(Category $model)
	{
	   parent::__construct($model);
	}

	/**
	* @return Collection
	*/
	public function all(): Collection
	{
		return $this->model->all();
	}
}
