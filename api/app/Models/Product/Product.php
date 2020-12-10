<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'price',
        'sku',
        'description',
        'category_id'
    ];

    use ProductConcern;
}
