-- AlterTable
ALTER TABLE `user` ADD COLUMN `roles` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER';
