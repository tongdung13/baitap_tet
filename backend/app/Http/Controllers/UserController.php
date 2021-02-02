<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;


class UserController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make(
            $request->all(), [
                'name' => 'required|string|max:90',
                'email' => 'required|email|max:255|unique:users',
                'password' => 'required|string|min:6|confirmed',
            ]
            );

            if($validator->fails()) {
                return response()->json(
                    $validator->errors()->toJson(), 400
                );
            }

            $user = User::create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => Hash::make($request->get('password'))
            ]);

            $token = JWTAuth::fromUser($user);

            return response()->json(compact('user', 'token'), 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email','password');

        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'error' => 'invalid_login'
                ], 401);
            }
        } catch (JWTException $e) {
            return response()->json([
                'error' => 'could_not_found_token'
            ], 500);
        }
        return response()->json(compact('token'));
    }

    public function getAuthenticatedUser()
    {
        try {
            if(! $user = JWTAuth::parseToken()->authenticate()){
                return response()->json([
                    'user not found'
                ], 400);
            }
        } catch (TokenExpiredException $e) {
            return response()->json([
                'token expired'
            ], $e->getCode());

        } catch (TokenInvalidException $e) {
            return response()->json([
                'token invalid'
            ], $e->getCode());
        }catch (JWTException $e) {
            return response()->json([
                'token absent'
            ], $e->getCode());
        }
        return response()->json(compact('user'));
    }
}
