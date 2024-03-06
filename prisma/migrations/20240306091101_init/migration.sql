-- DropIndex
DROP INDEX `Bank_account_bank_type_fkey` ON `Bank_account`;

-- DropIndex
DROP INDEX `Bank_account_user_info_id_fkey` ON `Bank_account`;

-- DropIndex
DROP INDEX `User_user_info_id_fkey` ON `User`;

-- AlterTable
ALTER TABLE `User_info` MODIFY `firstname` VARCHAR(191) NULL;
