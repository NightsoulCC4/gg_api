-- CreateTable
CREATE TABLE `User_info` (
    `id_user_info` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `address` TEXT NOT NULL,
    `address_2` TEXT NOT NULL,

    UNIQUE INDEX `User_info_firstname_key`(`firstname`),
    PRIMARY KEY (`id_user_info`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bank_name` (
    `bank_name_id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Bank_name_description_key`(`description`),
    PRIMARY KEY (`bank_name_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bank_account` (
    `bank_account_id` INTEGER NOT NULL AUTO_INCREMENT,
    `bank_no` INTEGER NOT NULL,
    `bank_type` INTEGER NOT NULL,
    `user_info_id` INTEGER NOT NULL,

    UNIQUE INDEX `Bank_account_bank_no_key`(`bank_no`),
    PRIMARY KEY (`bank_account_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_user_info_id_fkey` FOREIGN KEY (`user_info_id`) REFERENCES `User_info`(`id_user_info`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bank_account` ADD CONSTRAINT `Bank_account_bank_type_fkey` FOREIGN KEY (`bank_type`) REFERENCES `Bank_name`(`bank_name_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bank_account` ADD CONSTRAINT `Bank_account_user_info_id_fkey` FOREIGN KEY (`user_info_id`) REFERENCES `User_info`(`id_user_info`) ON DELETE RESTRICT ON UPDATE CASCADE;
