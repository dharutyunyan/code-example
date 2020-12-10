<?php
namespace Tests\Feature\Http\Controllers;

use App\Models\Category\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\User;
use Tests\TestCase;

class CategoryControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testCategoryListedSuccessfully()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user, 'api');

        
        $response = $this->get('/category');

        $response->assertStatus(200);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testCategoryCreatedSuccessfully()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user, 'api');

        $categoryData = [
            "name" => "Susan Wojcicki",
            "description" => "YouTube",
            "sku" => "2014",
        ];

        $this->json('POST', 'api/category', $categoryData, ['Accept' => 'application/json'])
            ->assertStatus(201)
            ->assertJson([
                "category" => [
                    "name" => "Susan Wojcicki",
                    "description" => "YouTube",
                    "sku" => "2014",
                ],
                "message" => "Created successfully"
            ]);

    }
}
