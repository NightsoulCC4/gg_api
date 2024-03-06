/*
  Warnings:

  - Made the column `firstname` on table `User_info` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `User_info_firstname_key` ON `User_info`;

-- AlterTable
ALTER TABLE `User_info` MODIFY `firstname` VARCHAR(191) NOT NULL;
