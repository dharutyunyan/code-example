<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use JWTAuth;
use JWTAuthException;

class JWTController extends Controller {

    private function getToken($email, $password)
    {
        $token = null;
        //$credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt( ['email'=>$email, 'password'=>$password])) {
                return [
                    'success' => false,
                    'message' => 'Password or email is invalid',
                ];
            }
        } catch (JWTAuthException $e) {
            return [
                'success' => 'false',
                'message' => 'Token creation failed',
            ];
        }
        return $token;
    }

    public function login( Request $request )
    {
        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        $user = \App\User::where( 'email', $request->email )->get()->first();
        if ($user && \Hash::check($request->password, $user->password)) {
            if($token = self::getToken($request->email, $request->password)) {
                $user->auth_token = $token;
                $user->save();
                $response = [ 'success' => true, 'user' => $user ];
            }else{
                return response()->json($token, 422);
            }
        }
        else
          return response()->json([ 'success'=>false, 'data' => 'Record doesnt exists' ], 422 );


        return response()->json($response, 200);
    }

    public function register(Request $request)
    {
        $payload = [
            'password'=>\Hash::make($request->password),
            'email'=>$request->email,
            'name'=>$request->name,
            'auth_token'=> ''
        ];

        $user = new \App\User($payload);
        if ($user->save())
        {

            $token = self::getToken($request->email, $request->password); // generate user token

            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);

            $user = \App\User::where('email', $request->email)->get()->first();

            $user->auth_token = $token; // update user token

            $user->save();

            $response = ['success'=>true, 'data'=>$user];
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];


        return response()->json($response, 201);
    }
}
