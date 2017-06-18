<?php

namespace DemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class MainController extends Controller
{
    public function indexAction()
    {
        return $this->render('DemoBundle:Default:index.html.twig');
    }

    public function authAction()
    {
        $request = Request::createFromGlobals();
        $data['login'] = $request->get('login');
        $data['password'] = $request->get('password');
        return new Response(json_encode($data), 200);
    }
}
