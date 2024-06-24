-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resume` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Basic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `mobile_no` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `resumeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Certifiate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `organization` VARCHAR(191) NOT NULL,
    `issuedAt` DATETIME(3) NOT NULL,
    `resumeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Language` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `score` VARCHAR(191) NOT NULL,
    `resumeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Education` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `school` VARCHAR(191) NOT NULL,
    `major` VARCHAR(191) NOT NULL,
    `start_dt` DATETIME(3) NOT NULL,
    `end_dt` DATETIME(3) NOT NULL,
    `isProgress` BOOLEAN NOT NULL,
    `resumeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Award` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `resumeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Link` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `resumeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Work` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `start_dt` DATETIME(3) NOT NULL,
    `end_dt` DATETIME(3) NOT NULL,
    `isProgress` BOOLEAN NOT NULL,
    `resumeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Resume` ADD CONSTRAINT `Resume_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Basic` ADD CONSTRAINT `Basic_resumeId_fkey` FOREIGN KEY (`resumeId`) REFERENCES `Resume`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Certifiate` ADD CONSTRAINT `Certifiate_resumeId_fkey` FOREIGN KEY (`resumeId`) REFERENCES `Resume`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Language` ADD CONSTRAINT `Language_resumeId_fkey` FOREIGN KEY (`resumeId`) REFERENCES `Resume`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Education` ADD CONSTRAINT `Education_resumeId_fkey` FOREIGN KEY (`resumeId`) REFERENCES `Resume`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Award` ADD CONSTRAINT `Award_resumeId_fkey` FOREIGN KEY (`resumeId`) REFERENCES `Resume`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Link` ADD CONSTRAINT `Link_resumeId_fkey` FOREIGN KEY (`resumeId`) REFERENCES `Resume`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Work` ADD CONSTRAINT `Work_resumeId_fkey` FOREIGN KEY (`resumeId`) REFERENCES `Resume`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
