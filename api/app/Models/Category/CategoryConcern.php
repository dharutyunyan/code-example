<?php

namespace App\Models\Category;

/**
 * Trait CategoryConcern Special category related model functions
 * @package App\Models\Category
 */
trait CategoryConcern
{
    public function products()
    {
        return $this->hasMany('App\Models\Product');
    }
}
