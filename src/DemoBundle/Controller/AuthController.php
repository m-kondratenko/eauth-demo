<?php
/**
 * Created by PhpStorm.
 * User: Mad Cat
 * Date: 17.06.2017
 * Time: 13:47
 */

namespace DemoBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends FOSRestController
{
    public function authAction()
    {
        $request = Request::createFromGlobals();
        $data['username'] = $request->get('login');
        $data['password'] = $request->get('password');
        $data['grant_type'] = 'password';

        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository("DemoBundle:Client");
        $client = $repository->findOneBy(['id' => 1]);

        $data['client_id'] = $client->getPublicId();
        $data['client_secret'] = $client->getSecret();
        return new Response(json_encode($data), 200);
    }
}
