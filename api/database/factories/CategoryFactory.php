<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Category\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'name' => $faker->words(6, true),
        'description' => $faker->text(),
        'sku' => $faker->uuid,
    ];
});
