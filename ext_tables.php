<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Nevafilm Site');

/**
 * Add extra fields to the sys_category record
 */
/*
$objectsSysCategoryColumns = array(
		
	'class' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:category.class',
			'config' => array(
			'type' => 'input',
			'size' => 30,
			'eval' => 'trim'
			),
		),		 
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('sys_category', $objectsSysCategoryColumns);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('sys_category', '--div--;LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:category.additional, images', '', 'before:description');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('sys_category', 'class', '', 'after:description');
*/

$GLOBALS['TCA']['pages']['columns'] += array(
	'hide_departament_news' => array(
		'label' => 'LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:page.hide_departament_news',
		'exclude' => 1,
		'config' => array (
			'type' => 'check',
			'items' => array(
				array('', '')
			)
		)
	),
	'hide_aside_links' => array(
		'label' => 'LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:page.hide_aside_links',
		'exclude' => 1,
		'config' => array (
			'type' => 'check',
			'items' => array(
				array('', '')
			)
		)
	),
	'picture_class' => array(
		'exclude' => 1,
		'label' => 'Class',
		'config' => array(
			'type' => 'select',
			'renderType' => 'selectSingle',
			'items' => array(
    			array('LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:page.select.no_class', ''),
    			array('LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:page.select.cinemas', 'topPicture __equipment-cinemas'),
    			array('LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:page.select.research_library', 'topPicture __library'),
				array('LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:page.select.research_cinema_market', 'topPicture __cinema-market'),
				array('LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:page.select.research_premium_research', 'topPicture __premium-research'),
				array('LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:page.select.research_marketing_research', 'topPicture __marketing-research'),
				array('LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:page.select.research_reports', 'topPicture __reports'),
				array('LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:page.select.equipment_cinemas', 'topPicture __equipment-cinemas'),	
				array('LLL:EXT:nevafilm_site/Resources/Private/Language/locallang.xlf:page.select.films_emotion', 'topPicture __films-emotion'),					
		),
		'size' => 1,
		'minitems' => 0,
		'maxitems' => 1,
		),
	),		

);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes (
	'pages', 'hide_departament_news', '1', 'after:title'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes (
	'pages', 'hide_aside_links', '1', 'after:hide_departament_news'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes (
	'pages', 'picture_class', '1', 'after:hide_aside_links'
);
