-- DropForeignKey
ALTER TABLE `Bank_account` DROP FOREIGN KEY `Bank_account_bank_type_fkey`;

-- DropForeignKey
ALTER TABLE `Bank_account` DROP FOREIGN KEY `Bank_account_user_info_id_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_user_info_id_fkey`;

-- DropIndex
DROP INDEX `Bank_name_description_key` ON `Bank_name`;

-- AlterTable
ALTER TABLE `Bank_account` MODIFY `bank_no` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User_info` MODIFY `address_2` TEXT NULL;
