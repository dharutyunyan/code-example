<?php

namespace App\Models\Product;

/**
 * Trait ProductConcern Special category related model functions
 * @package App\Models\Product
 */
trait ProductConcern
{
    public function category()
    {
        return $this->belongsTo('App\Models\Category\Category');
    }
}
