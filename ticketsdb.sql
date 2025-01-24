-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2024 at 01:38 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticketsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `questions_id` int(11) NOT NULL,
  `answer` text DEFAULT NULL,
  `is_correct` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `questions_id`, `answer`, `is_correct`) VALUES
(27, 14, 'neteisingas 1', 0),
(28, 14, 'neteisingas 1', 0),
(29, 14, 'teisingas 1', 1),
(30, 15, 'neteisingas 2', 0),
(31, 15, 'teisingas 2', 1),
(32, 15, 'teisingas 2', 1),
(33, 16, 'neteisingas 3', 0),
(34, 16, 'teisingas 3', 1),
(35, 16, 'neteisingas 3', 0),
(36, 16, 'teisingas 3', 1),
(37, 17, 'teisingas 4', 1),
(38, 17, 'teisingas 4', 1),
(39, 17, 'teisingas 4', 1),
(40, 17, 'neteisingas 4', 0),
(41, 18, 'teisingas 1', 1),
(42, 18, 'neteisingas 1', 0),
(43, 19, 'teisingas 2', 1),
(44, 19, 'neteisingas 2', 0),
(45, 19, 'neteisingas 2', 0),
(46, 20, 'teisingas 3', 1),
(47, 20, 'neteisingas 3', 0),
(48, 20, 'neteisingas 3', 0),
(49, 20, 'teisingas 3', 1),
(50, 21, 'teisingas 4', 1),
(51, 21, 'teisingas 4', 1),
(52, 21, 'neteisingas 4', 0),
(53, 21, 'teisingas 4', 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`) VALUES
(10, 'Pirma kategorija'),
(11, 'Antra kategorija');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2024_11_07_122007_create_categories_table', 1),
(2, '2024_11_07_122008_create_questions_table', 1),
(3, '2024_11_07_122009_create_answers_table', 1),
(4, '2024_11_07_122010_create_users_table', 1),
(5, '2024_11_07_122011_create_test_history_table', 1),
(6, '2024_11_07_122012_create_tests_table', 1),
(7, '2024_11_07_122013_create_tests_has_categories_table', 1),
(8, '2024_11_07_140215_create_personal_access_tokens_table', 2),
(9, '2024_12_17_153758_create_oauth_auth_codes_table', 3),
(10, '2024_12_17_153759_create_oauth_access_tokens_table', 3),
(11, '2024_12_17_153800_create_oauth_refresh_tokens_table', 3),
(12, '2024_12_17_153801_create_oauth_clients_table', 3),
(13, '2024_12_17_153802_create_oauth_personal_access_clients_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('00b54089f942afd7db8416f479de43ab2f0a335d49b66772889e85f5b806625f4f49ff57110977b8', 7, 1, 'WebAppToken', '[]', 0, '2024-12-17 19:38:43', '2024-12-17 19:38:43', '2025-12-17 21:38:43'),
('0452d9c08ca248c8460da0de5395b2c5114be4a4f55b3a339238dd091113f578d0df212eb1e92680', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 18:00:57', '2024-12-17 18:00:58', '2025-12-17 20:00:57'),
('0c8497c9e00220d09a2bc276292237c25969262fb1eab8c92f998c329a55ca7633d444c6a51945c2', 7, 1, 'WebAppToken', '[]', 0, '2024-12-17 16:31:38', '2024-12-17 16:31:39', '2025-12-17 18:31:38'),
('0ca92e3cc80ad3dedde4bae8305d185b3062151f9f74261eed227948147c2b0e479c82b3ff92f8ce', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 18:49:43', '2024-12-17 19:28:27', '2025-12-17 20:49:43'),
('0e8dddcd594a7540e935eebda922be089787721d03fa7b980c8be139df34aaee5b546e2e66da77b2', 2, 1, 'WebAppToken', '[]', 1, '2024-12-19 09:24:16', '2024-12-19 09:27:48', '2025-12-19 11:24:16'),
('0f2be8e1429a55c45abbf94b0143e16800f0b6f46349b7657e320ed8731f482032b9f78cb4dbeb8c', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 19:34:15', '2024-12-17 19:34:16', '2025-12-17 21:34:15'),
('14248a70f2382864c24d27c9f6010d98f55ae37e87309597944e9e522ba44820c54febb93e3966b7', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 14:38:55', '2024-12-17 14:38:56', '2025-12-17 16:38:55'),
('1557065c3a9878ed493dc1a0afa0280fd12136d8f3ce9aa2aea4403efe518ec601a4c923c94879a0', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 15:42:30', '2024-12-17 15:42:30', '2025-12-17 17:42:30'),
('16ee6a48ab7385b06dd0368eac4c557bc3829070c2795e801bd75cabac4faea14c26bc3da72a3885', 7, 1, 'WebAppToken', '[]', 0, '2024-12-19 09:21:54', '2024-12-19 09:21:54', '2025-12-19 11:21:54'),
('17bfbc55bfd147057a15f196f53bd768f6b18b1b72b37b7c23d328df22d1cab7d4b22177168256cb', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 18:53:34', '2024-12-17 18:53:35', '2025-12-17 20:53:34'),
('197cb4fdf90b801996e84cbba0014bff077d77a72ffbb75c43c6cca3b1ac08f7f8a87fed04f86537', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 20:30:30', '2024-12-17 20:30:30', '2025-12-17 22:30:30'),
('1bc8a8b5d4884edd53b674ff9eac878490e2eac40435d6d1b3f511b54ebb8a06e15237fd0b77ae3b', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 18:43:33', '2024-12-17 18:44:37', '2025-12-17 20:43:33'),
('2b866d0ffab1be752e4d5ce4107cec76153b0ddd1a23ed453c5d357d39b78bc723a6e53cda709ab0', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 20:13:19', '2024-12-17 20:14:30', '2025-12-17 22:13:19'),
('340f2c996397d5990134414cd73101a3bd76406c9737109a270c36b99ef8759efa84bccf80f8442f', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 16:22:55', '2024-12-17 16:22:59', '2025-12-17 18:22:55'),
('3450139397743d2a66a0ebaa33ea8d6bf797798d2b0eed04c55fa44adb7890f20e86db27b20f9c96', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 16:12:44', '2024-12-17 16:12:45', '2025-12-17 18:12:44'),
('3d85fe0abf59deff7705a997e9bf968451214fb1fbd47ea68553abb10d5290190291f3821e18e62a', 2, 1, 'WebAppToken', '[]', 1, '2024-12-19 09:29:30', '2024-12-19 09:31:14', '2025-12-19 11:29:30'),
('4afb036ae44b7bb43b18db8a3ef112c1c49a3690c6d09eb36d588e2960baa1cdbd35cee2eef197a7', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 16:15:04', '2024-12-17 16:21:14', '2025-12-17 18:15:04'),
('4b3c873b89cb3e720c58048ce9e8309a880da56bf87a8d35449457d15a43cd8fa509e3486962b6a6', 6, 1, 'WebAppToken', '[]', 0, '2024-12-17 13:39:25', '2024-12-17 13:39:25', '2025-12-17 15:39:25'),
('4e295513fd35477901efb3a59b8b31626c9f8f10af7f73f56ead014d72bd1341f11d5da5cd59dcdd', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 15:41:28', '2024-12-17 15:41:28', '2025-12-17 17:41:28'),
('511b68e53a74cda6e4bd129ef31295862124484902e1b92e4667f5aedfb4c88fe261a029b7007a7f', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 16:22:49', '2024-12-17 16:22:52', '2025-12-17 18:22:49'),
('56c0192ad7ae67d2876f16ca769f08f1d7e9f28ef6bacae2a8a504f8cf180e1c4c8de6f715482f07', 7, 1, 'WebAppToken', '[]', 0, '2024-12-19 09:31:20', '2024-12-19 09:31:20', '2025-12-19 11:31:20'),
('5927ea8a08ba6947765bfb8c7ed94dd014226b1399769ce9dc9de5785e429e4ebea05a39c61d94d6', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 15:46:58', '2024-12-17 15:46:58', '2025-12-17 17:46:58'),
('61b8c51eef7e4f89c0e7c516dae961d373c37e90a168900f9a7aa1cd4d1edcdbd16557bb65ccbde7', 2, 1, 'WebAppToken', '[]', 0, '2024-12-19 08:26:58', '2024-12-19 08:27:00', '2025-12-19 10:26:58'),
('61f67775661d9af2b54285c94c71cd9695d7f77ad1972659729dff3feafada4c5654bec6fdc14fd4', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 20:19:02', '2024-12-17 20:19:02', '2025-12-17 22:19:02'),
('62ceb322e8221f5aa0e0f7ea2daf0f7ebcae4bafb767ad11c51d90b223678f093bac3685799ac291', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 14:58:19', '2024-12-17 15:00:15', '2025-12-17 16:58:19'),
('63f0f473b767ec1094f39f46c485fdd423a42982988a3e64513db345abbe4a89db7124542540d648', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 14:34:00', '2024-12-17 14:34:00', '2025-12-17 16:34:00'),
('64d39bbe968ea856e1e7df15490d94c268c96bb5a8b0c3e3a2a76a3b2b832ce979e541193b1e2c0d', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 20:18:30', '2024-12-17 20:18:30', '2025-12-17 22:18:30'),
('65442d42f137f746b3ca63121440a71b3b25912f4c3edeeb4027222cd1270a96f2b26cc16316955f', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 17:09:12', '2024-12-17 17:09:16', '2025-12-17 19:09:12'),
('67230f35aad97da74e06ddccbbc2269722acfa382861c23960639cc3f56ca5b3ccb67e949315e9e7', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 13:50:22', '2024-12-17 13:50:22', '2025-12-17 15:50:22'),
('67c4d5c1e7965ec6224e1850bd4baae50cb1c8dacf078a12087146abebfe637b73068f4bc2c24fe7', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 19:37:34', '2024-12-17 19:38:34', '2025-12-17 21:37:34'),
('6bf3d6be6e075f334834cfbd4cd435018a22e5b81903be47a97cda42830d5251fbaa73a2f76771fa', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 20:20:19', '2024-12-17 20:20:19', '2025-12-17 22:20:19'),
('6c6c9ee80a91113b32f19553980579ec81d4012ea82358e1b1a8eaf09aac35fca57d5224ebdea0db', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 20:24:32', '2024-12-17 20:28:54', '2025-12-17 22:24:32'),
('6c85769613ab5505620ee50e0bb9785ade5dfe5bfa37370eb601e38fd85b8562b53012b62404e892', 7, 1, 'WebAppToken', '[]', 1, '2024-12-17 18:37:27', '2024-12-17 18:43:31', '2025-12-17 20:37:27'),
('6d77bfb9988f3a0039a843ed3a85a4af329f6392e9b3dc5fdc093af0580b9f811931f4b0482facb5', 7, 1, 'WebAppToken', '[]', 0, '2024-12-17 20:31:27', '2024-12-17 20:31:27', '2025-12-17 22:31:27'),
('6eab26358f21b796d225138761b981c40d79c9d518c5531d37c33a5c11fc2d854238f9142b17a158', 2, 1, 'WebAppToken', '[]', 1, '2024-12-19 09:28:20', '2024-12-19 09:28:22', '2025-12-19 11:28:20'),
('6f8e0df94265ab74a791eb4b76f92171f982fe4c9df2cea22c600f990a22ef0f51701f9c3a08225c', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 20:21:52', '2024-12-17 20:24:30', '2025-12-17 22:21:52'),
('765df240113f092e244b4c91048db8231ac498f6c7df68e26d19b16e10f955d0ff0cc6f3469ec5d5', 7, 1, 'WebAppToken', '[]', 1, '2024-12-17 18:06:27', '2024-12-17 18:37:20', '2025-12-17 20:06:27'),
('799be42e79966f7565bc8f4a5a9fee33e48b1be751be463236e91d17c0861c9122c84a0bd75474cf', 7, 1, 'WebAppToken', '[]', 1, '2024-12-17 20:29:01', '2024-12-17 20:30:47', '2025-12-17 22:29:01'),
('811da9bc0b23845da081f0b6ef93cbe9a9758bb5fb7d77681d1f657705e200b49602831ae7135abb', 8, 1, 'WebAppToken', '[]', 0, '2024-12-17 16:45:11', '2024-12-17 16:45:12', '2025-12-17 18:45:11'),
('8886ce833dd3db6e50dedfd6694da8029704f384b28aa6c664945e7e614eefe684a285a5fa6d3d1c', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 19:06:05', '2024-12-17 19:06:05', '2025-12-17 21:06:05'),
('89c1fdb2018665e25f1d970e74c0bb838ac060f02819a5dd2d1438e1047ba142b4cd1701fe7626de', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 15:00:38', '2024-12-17 15:00:53', '2025-12-17 17:00:38'),
('8c4a0e9b6f0f6d782cf8a2956a5f772d75413ecd43bc175204915faa5d39ddd7ed4f333d57037b00', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 18:01:00', '2024-12-17 18:06:19', '2025-12-17 20:01:00'),
('926dd1e25a94bf5ab3e4693cc5d2a0dd6bb0f2028f3181d83fa96fbfcfe61e022b73ebfa100724c0', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 16:49:50', '2024-12-17 16:49:59', '2025-12-17 18:49:50'),
('92b28a7e1b77ba7838971f47abc41423ff29b17debe6dc33bf7b7ea1364921bf8d9c3e909b0c96f0', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 14:05:27', '2024-12-17 14:05:27', '2025-12-17 16:05:27'),
('92bf792d3585a75297e32e4b520c463d9398c676aab830e7627d8cbff86cf0456d5c7e18c8118739', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 15:39:31', '2024-12-17 15:39:31', '2025-12-17 17:39:31'),
('9378745f2cba066bc21b92964262a10d2e0548c053f09c388d76a82a2236d1d4c63b97e1e1b556b2', 7, 1, 'WebAppToken', '[]', 1, '2024-12-17 18:44:44', '2024-12-17 18:49:42', '2025-12-17 20:44:44'),
('a0f14f9cfea431471905a4d1d014cbb24c907d532bd829a4102ae32794db83f2f46e09301b73c387', 9, 1, 'WebAppToken', '[]', 0, '2024-12-17 16:48:59', '2024-12-17 16:48:59', '2025-12-17 18:48:59'),
('a16a9852882b49b4107ff61fdf5d2bfb181141fbcc1d527e8c1cdf779e7a49a8b8e357821ec76e8a', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 15:41:49', '2024-12-17 15:41:49', '2025-12-17 17:41:49'),
('a75b54149a8a7815c5c076ed1e5537987e0852bb5be5a0103212a1b61f34c72e8467a407ea63f605', 2, 1, 'WebAppToken', '[]', 1, '2024-12-19 08:27:02', '2024-12-19 08:27:09', '2025-12-19 10:27:02'),
('acf64d6dfbaf69854c11a9548e6ecaec702c0e024d606526acea896fbfc4bb0ac269a203bf80fcc5', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 19:31:46', '2024-12-17 19:31:47', '2025-12-17 21:31:46'),
('b2122e46d5d635b624c7890311a006c0a9e97b035a8fcaba7815d7f1d0960a9ef925f0c087b88474', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 16:50:01', '2024-12-17 17:07:43', '2025-12-17 18:50:01'),
('ba2d716cc62615557790e97c9e069efee59b21aef30f987db5e95cee211e118d0cdf9671baaa305e', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 16:49:02', '2024-12-17 16:49:48', '2025-12-17 18:49:02'),
('bdaf75a9aceb64c8ce0e01605a365b94a3624099c3f843e8f78351700b0b973e3aed21a95f868eaa', 2, 1, 'WebAppToken', '[]', 0, '2024-12-19 09:21:42', '2024-12-19 09:21:42', '2025-12-19 11:21:42'),
('c4fa91cdb079f9806e227a31ca19679f8c7b1f34cbdbb635422067b9fbf42be57a371e89eab54d70', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 15:42:36', '2024-12-17 15:42:36', '2025-12-17 17:42:36'),
('caee027fe2b3fe0c784f9db6c37d725b5c04d9af4ab16d600fa0bca9ed6e3c90b06b4a46784f2444', 7, 1, 'WebAppToken', '[]', 0, '2024-12-17 20:14:37', '2024-12-17 20:14:37', '2025-12-17 22:14:37'),
('cf6b6ec5d387d4153650c3f8e1c332b02348d7883481f57f3b2b0df8636d2499500be5cae3938fbd', 7, 1, 'WebAppToken', '[]', 1, '2024-12-17 19:28:34', '2024-12-17 19:31:45', '2025-12-17 21:28:34'),
('d1b73dbb5922657854c7cdf05dfddcd6b9c4834488a69b99115f09f1ec73b0c8fe77024b46f24056', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 19:25:19', '2024-12-17 19:25:19', '2025-12-17 21:25:19'),
('d29b670fe1c9aeee217cdfe05ca65debfff3adb9617d7a88cd11efd56fd829f681d2d47d68a0bad2', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 19:55:42', '2024-12-17 19:55:56', '2025-12-17 21:55:42'),
('d4ed8d6022a183ef60198412f3aa99ba24c9d4bef0f448240d0a94850e3763ac03364f962d8c4c83', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 15:51:42', '2024-12-17 15:51:42', '2025-12-17 17:51:42'),
('d5470dddc2558cd72b46fbb7a6d064e454db947d4931cd669b5e5da9d1a4b2bba94783c893161eb6', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 15:45:03', '2024-12-17 15:45:03', '2025-12-17 17:45:03'),
('d65d0b5a5cc756583832082c4f738f36dabeb1f64f96c6eb9c72116d33edc7a3616daab898d452fa', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 19:16:51', '2024-12-17 19:16:51', '2025-12-17 21:16:51'),
('ee3ff494a6b763f87693f38f4704dbde083e87e36f433e4b1a4d71faae816d5fd3a74cfe9d46ff22', 2, 1, 'WebAppToken', '[]', 1, '2024-12-17 20:30:49', '2024-12-17 20:31:20', '2025-12-17 22:30:49'),
('eeda264fb0d74219647c718db39a74e6bcaed0a7dad50aaa1fd4eb0fac0448fb3be6e30eb2349678', 7, 1, 'WebAppToken', '[]', 1, '2024-12-19 09:22:56', '2024-12-19 09:24:13', '2025-12-19 11:22:56'),
('f1c94848c76fd86790e32043b2a389ad0ffacce8cd9d7dd2492c6dc65de0dc370a9a9331f7b7175b', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 15:51:19', '2024-12-17 15:51:20', '2025-12-17 17:51:19'),
('f583c7712623968ad8b17d196e9fd54a744aa56af354b0d47f94ca3d1c06cf7cd8d8340cee4cd4ae', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 20:20:05', '2024-12-17 20:20:05', '2025-12-17 22:20:05'),
('f6b979601d502f684a0cc4c166df59c85b05bbf7934067bbd005c1c995143ef7f64e09f810e4b34c', 7, 1, 'WebAppToken', '[]', 1, '2024-12-17 17:09:22', '2024-12-17 18:00:54', '2025-12-17 19:09:22'),
('fac9faaf377e6304be9a27e5892d2ff3d94b7983e75e4639b1c4f043f2e47732ced5736c43a9bdfa', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 19:57:22', '2024-12-17 19:57:23', '2025-12-17 21:57:22'),
('fb3411ddefa6dd92ea222d30b0fe355b1f72553a42c0ab247975a0b0c750e276e2af0f4399355299', 7, 1, 'WebAppToken', '[]', 1, '2024-12-17 17:07:55', '2024-12-17 17:09:10', '2025-12-17 19:07:55'),
('fca958924037c4440dec60ac48478af2cfc2803340a453aabcebc4c7e909d0f5a1b75f0888676a13', 7, 1, 'WebAppToken', '[]', 0, '2024-12-19 08:59:53', '2024-12-19 08:59:53', '2025-12-19 10:59:53'),
('fe3215ad325d22e7ad2583651bbb27c5f9ba496ee826bd145088bfc587f1a34b3b46c1e5643a74f8', 2, 1, 'WebAppToken', '[]', 0, '2024-12-17 18:00:56', '2024-12-17 18:00:56', '2025-12-17 20:00:56');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `secret` varchar(100) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Personal', 'ZEjTrRZgInGreU053sARV4C24Wy8iRHuSJTAptpC', NULL, 'http://localhost', 1, 0, 0, '2024-12-17 13:39:05', '2024-12-17 13:39:05');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2024-12-17 13:39:05', '2024-12-17 13:39:05');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `categories_id` int(11) NOT NULL,
  `question` text DEFAULT NULL,
  `image` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `categories_id`, `question`, `image`) VALUES
(14, 10, 'Pirmasis klausimas (pirma kategorija)', NULL),
(15, 10, 'Antrasis klausimas (pirma kategorija)', NULL),
(16, 10, 'Trečiasis klausimas (pirma kategorija)', NULL),
(17, 10, 'Ketvirtasis klausimas (pirma kategorija)', NULL),
(18, 11, 'Pirmasis klausimas (antra kategorija)', 0x5b5d),
(19, 11, 'Antrasis klausimas (antra kategorija)', NULL),
(20, 11, 'Trečiasis klausimas (antra kategorija)', NULL),
(21, 11, 'Ketvirtasis klausimas (antra kategorija)', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE `tests` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `summary` text DEFAULT NULL,
  `questions_count` int(11) DEFAULT NULL,
  `test_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`id`, `users_id`, `title`, `summary`, `questions_count`, `test_time`) VALUES
(9, 0, 'Testas skirtas testavimui', 'Testas sudarytas iš testavimo klausimų', 6, 200);

-- --------------------------------------------------------

--
-- Table structure for table `tests_has_categories`
--

CREATE TABLE `tests_has_categories` (
  `tests_id` int(11) NOT NULL,
  `categories_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tests_has_categories`
--

INSERT INTO `tests_has_categories` (`tests_id`, `categories_id`) VALUES
(9, 10),
(9, 11);

-- --------------------------------------------------------

--
-- Table structure for table `test_history`
--

CREATE TABLE `test_history` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `test_name` varchar(45) DEFAULT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `is_admin`) VALUES
(1, 'Mantas', 'Vansauskas', 'mantas.vansauskas@ktu.lt', '$2y$12$c40vAdNaWwCtqKgl9f03rOivjBpqH32X3ZFKlRbdID7hsbXBJjDfK', 1),
(2, 'Testas', 'Testinis', 'naujasemail@mail.com', '$2y$12$xLyFY1mreTnNww7xcNh6oe/PcNF6Tku84Epam4R.EqTjVIQx5PwV.', 0),
(3, 'Testas', 'Testinis', 'naujasemail@mail.com', '$2y$12$GDfEeNeh9PdstURprc7KmetGi4mVlT33NcIb3ztVwN8UCHLqvMYFa', 0),
(4, 'Testas', 'Testinis', 'naujasemail@mail.com', '$2y$12$O0nKnQ3fiT5BKFhH5i6iy.K9ewadlMiNa8Je63/YAmugItI3/17eW', 0),
(5, 'Testas', 'Testinis', 'naujasemail@mail.com', '$2y$12$3vasLotK7R7nrIsaNQufHeks9PrS1dXi3QVCBKsUi0CIRsLBVR0w6', 0),
(6, 'Testas', 'Testinis', 'naujasemail@mail.com', '$2y$12$qytJOKJLjuWuxEjykD6dKuWlob7OGWQCw5bhqWkAMeQ0Pu0h.TRJ2', 0),
(7, 'Mantas', 'Vansauskas', 'mantasv@gmail.com', '$2y$12$c40vAdNaWwCtqKgl9f03rOivjBpqH32X3ZFKlRbdID7hsbXBJjDfK', 1),
(8, 'testas', 'testas', 'naujasemssail@mail.com', '$2y$12$WsmmcwfxRBsNFubg1h5wMOhOYHwkMSe5Qm1b4XBGLHDkNCIeYJF3C', 0),
(9, 'asdasd', 'asdasdas', 'naujasssemail@mail.com', '$2y$12$4wOdorApgQjsld0hPM5OB.6ntMZ1/GdcTjHGKXk8sKs/yf2zaTI72', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_answers_questions1` (`questions_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_questions_categories1` (`categories_id`);

--
-- Indexes for table `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tests_users1` (`users_id`);

--
-- Indexes for table `tests_has_categories`
--
ALTER TABLE `tests_has_categories`
  ADD PRIMARY KEY (`tests_id`,`categories_id`),
  ADD KEY `fk_tests_has_categories_categories1` (`categories_id`);

--
-- Indexes for table `test_history`
--
ALTER TABLE `test_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_test_history_users` (`users_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `fk_answers_questions1` FOREIGN KEY (`questions_id`) REFERENCES `questions` (`id`);

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `fk_questions_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `tests`
--
ALTER TABLE `tests`
  ADD CONSTRAINT `fk_tests_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `tests_has_categories`
--
ALTER TABLE `tests_has_categories`
  ADD CONSTRAINT `fk_tests_has_categories_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `fk_tests_has_categories_tests1` FOREIGN KEY (`tests_id`) REFERENCES `tests` (`id`);

--
-- Constraints for table `test_history`
--
ALTER TABLE `test_history`
  ADD CONSTRAINT `fk_test_history_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
