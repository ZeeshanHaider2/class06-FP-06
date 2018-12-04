SET NAMES utf8mb4;

USE `hzdz9iw2wz4bhn3z`;

CREATE TABLE `mentors`(
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `birthday` DATE,
	`type` ENUM('mentor', 'student', 'other') DEFAULT 'mentor',
    `slack_nickname` VARCHAR(255),
    `admission_date` DATE,
    `status`ENUM ('active', 'inactive') DEFAULT 'active',
    PRIMARY KEY(`id`)
)Engine=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 


INSERT INTO `mentors` (`first_name`, `last_name`, `type`,`slack_nickname`, `status`)
	VALUES 
	 ('Ahmed', 'Magdy', 'mentor', 'https://github.com/a-magdy', 'active'),
	 ('Daniel', 'Fernandes', 'mentor', 'https://github.com/dpfernandes', 'active'),
	 ('Jacob', 'Andresen', 'mentor', 'https://github.com/jacobandresen', 'active'),
	 ('Zaki', 'Wasik', 'mentor', 'https://github.com/zkwsk', 'active');
