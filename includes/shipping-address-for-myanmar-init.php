<?php
if (!defined('ABSPATH')) {
	exit;
}
if (!class_exists('Shipping_Address_For_Myanmar_init')) {
	class Shipping_Address_For_Myanmar_init
	{
		function __construct()
		{
			add_filter('woocommerce_default_address_fields', array(&$this, 'custom_override_default_custom_field'));
			add_action('wp_footer', array(&$this, 'add_script_to_footer'));
		}

		//Change postcode to city/township and text type to select type

		function custom_override_default_custom_field($address_fields)
		{
			$array = array(
				'default' => "default",
			);
			$address_fields['postcode']['type'] = 'select';
			$address_fields['postcode']['label'] = 'Town / City';
			$address_fields['postcode']['validate'] = array('none');
			$address_fields['postcode']['options'] = $array;
			$address_fields['country']['default'] = 'Myanmar';
			$address_fields['city']['type'] = 'select';
			$address_fields['city']['label'] = 'State';
			$address_fields['city']['validate'] = array('none');
			$address_fields['city']['options'] = $array;
			unset($address_fields['company']);
			unset($address_fields['state']);
			return $address_fields;
		}

		function add_script_to_footer()
		{
			wp_enqueue_script('ava-test-js', plugins_url('../assets/js/index.js', __FILE__));
		}
	}
}
