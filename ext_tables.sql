#
# Table structure for table 'sys_category'
#

CREATE TABLE sys_category (
	#class varchar(255) DEFAULT '' NOT NULL,
);

CREATE TABLE pages (
	picture_class varchar(255) DEFAULT '' NOT NULL
	hide_aside_links int(11) unsigned DEFAULT '0' NOT NULL
	hide_departament_news int(11) unsigned DEFAULT '0' NOT NULL
);

#CREATE TABLE nevafilm_site_classes (
#	picture_class int(11) unsigned DEFAULT '0' NOT NULL
#	hide_breadcrumb int(11) unsigned DEFAULT '0' NOT NULL
#	hide_departament_news varchar(255) DEFAULT '' NOT NULL
#);
