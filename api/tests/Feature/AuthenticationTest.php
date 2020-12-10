<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;
    public function testMustEnterEmailAndPassword()
    {
        $this->json('POST', 'api/login')
            ->assertStatus(422)
            ->assertJson([
                "message" => "The given data was invalid.",
                "errors" => [
                    'email' => ["The email field is required."],
                    'password' => ["The password field is required."],
                ]
            ]);
    }

    public function testSuccessfulLogin()
    {
        $user = factory(User::class)->create([
           'email' => 'sample@test.com',
           'password' => bcrypt('sample123'),
        ]);


        $loginData = ['email' => 'sample@test.com', 'password' => 'sample123'];

        $this->json('POST', 'api/login', $loginData, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJsonStructure([
               "user" => [
                   'id',
                   'name',
                   'email',
                   'auth_token',
                   'email_verified_at',
                   'stripe_id',
                   'card_brand',
                   'card_last_four',
                   'trial_ends_at',
                   'created_at',
                   'updated_at',
               ],
               "success",
            ]);

        $this->assertAuthenticated();
    }
}
