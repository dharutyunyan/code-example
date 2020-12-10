<?php

namespace App\Models\Category;

//use Domain\Category\CategoryEntity;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Category
 * @package App\Models\Category
 */
class Category extends Model
{
    protected $fillable = [
        'name',
        'sku',
        'description',
    ];

    use CategoryConcern;
}
