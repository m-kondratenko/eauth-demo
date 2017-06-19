<?php
/**
 * Created by PhpStorm.
 * User: Mad Cat
 * Date: 12.06.2017
 * Time: 11:47
 */

namespace DemoBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Response;
use Faker;

class DemoController extends FOSRestController
{
    public function showAction()
    {
        if ($faker = Faker\Factory::create()) {
            $data = $faker->text;
        } else {
            $data = 'Looks like text randomizer is down';
        };
        return new Response(json_encode($data), 200);
    }
}
