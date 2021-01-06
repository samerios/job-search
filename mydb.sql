-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: אפריל 07, 2020 בזמן 07:12 PM
-- גרסת שרת: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `job`
--

DROP TABLE IF EXISTS `job`;
CREATE TABLE IF NOT EXISTS `job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jobnumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci DEFAULT NULL,
  `namee` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci DEFAULT NULL,
  `datee` text NOT NULL,
  `typee` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci DEFAULT NULL,
  `emp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci DEFAULT NULL,
  `description` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci DEFAULT NULL,
  `req` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci DEFAULT NULL,
  `what` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci DEFAULT NULL,
  `wheree` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- הוצאת מידע עבור טבלה `job`
--

INSERT INTO `job` (`id`, `jobnumber`, `namee`, `datee`, `typee`, `emp`, `address`, `description`, `req`, `email`, `img`, `what`, `wheree`, `status`) VALUES
(16, '2442', 'כדכשכשדכ', '2020-03-13', 'משרה מלאה', 'בססבד', 'חיפה', 'yuyuyuuyyyyyyyyyyyyyyyyyyyyyyyyyyy', 'jhjhjhjhj55555555555555', 'john.beck@gmail.com', '20191226_204200.jpg-1585522265167כדכשכשדכ.jpeg', 'ייצור', 'השרון', 'פעיל'),
(17, '5434543', 'trtrtr', '2020-03-20', 'משרה מלאה', 'gfgfgf', 'fgfgf', 'gfgfgrtttttttttttttttt', 'fg fbbtrrrrrrrrrrr', 'samujh@hotmail.com', 'v.jpg-1585578655019trtrtr.jpeg', 'עבודה מהבית', 'הגולן', 'פעיל'),
(18, '434343', 'rtrtrtt', '2020-03-15', 'עבודה מהבית', 'rgegrg', 'rtrtrtr', 'erere66666666666666666666', 'rgerggr6666666666666', 'sam.kin.1993@gmail.com', 'v.jpg-1585578708887rtrtrtt.jpeg', 'ייצור', 'הגליל העליון', 'פעיל'),
(19, '455525', 'ollolol', '2020-03-21', 'משרה מלאה', 'lololol', 'lololo', 'lololoyyyyyyyyyyyyyyyyyyy', 'lololoyyyyyyyyyyyyyyy', 'sam.kin.1993@gmail.com', 'v.jpg-1585578767642ollolol.jpeg', 'ייצור', 'הגליל העליון', 'פעיל'),
(20, '0909', 'ytytyt', '2020-03-26', 'עבודה מהבית', 'ytyyyyy', 'tytyt', 'ytyyyyyyyyyyyynmuiiiiiiiii', 'im,uuuuuuuuuuuuuuuuuuu', 'ttt@gmail.com', 'v.jpg-1585578793336ytytyt.jpeg', 'תוכנה', 'תל-אביב והמרכז', 'פעיל'),
(21, '54544', 'rtrtrtfgf', '2020-04-03', 'פלילנסר', 'gffffffffff', 'gvgfgv', 'ffffffffffffffffffffffffffffffffffffffffffff', 'gvfvvvvvvvvvvvvvvvvvvvvvvvvvv', 'sam.kin.1993@gmail.com', 'v.jpg-1585601178216rtrtrtfgf.jpeg', 'תוכנה', 'תל-אביב והמרכז', 'פעיל'),
(22, '12666', 'גגגגגגגג', '2020-03-19', 'משרה חלקית', 'adddddddd', 'rtrtrt', 'cd C:סאמר כנעאןלמידה עצמית של שפותserver', 'cd C:סאמר כנעאןלמידה עצמית של שפותserverSideNodeJsemail\r\node-mysql-crud-app-master\r\nnode adminApp.js', 'sam.kin.1993@gmail.com', 'v.jpg-1585601215658גגגגגגגג.jpeg', 'תוכנה', 'תל-אביב והמרכז', 'פעיל'),
(23, '87777', 'כדכשכשדכ', '2020-03-14', 'משרה מלאה', 'בססבד', 'sreed.129.99', 'cd C:סאמר כנעאןלמידה עצמית של שפותserverSideNodeJsemail\r\node-mysql-crud-app-master\r\nnode adminApp.js', 'cd C:סאמר כנעאןלמידה עצמית של שפותserverSideNodeJsemail\r\node-mysql-crud-app-master\r\nnode adminApp.js', 'sam.kin.1993@gmail.com', 'v.jpg-1585601250987כדכשכשדכ.jpeg', 'תוכנה', 'תל-אביב והמרכז', 'פעיל'),
(15, '55', 'כדכשכשדכ', '2020-03-28', 'משרה מלאה', 'בססבד', 'sreed.129.99', 'לארגון כלכלי גדול במרכז דרוש /ה רו\"ח ליחידת הדיווח החשבונאי במחלקת כספים ומנהל.\r\nהמשרה הינה זמנית. קיימת אופציה להארכה.\r\nהיקף המשרה - מלאה.\r\nסיוע לביצוע הדיווח הכספי/חשבונאי, לרבות יישום התקנים הבינלאומיים (IFRS) ולבקרות הקשורות לדיווח הכספיISOX לרבות תחשיבי מס של הבורסה והחברות הנמנות עם קבוצת חברות הבורסה.\r\nסיוע ככל שידרש בתחומי פעילות המחלקה.', 'לארגון כלכלי גדול במרכז דרוש /ה רו\"ח ליחידת הדיווח החשבונאי במחלקת כספים ומנהל.\r\nהמשרה הינה זמנית. קיימת אופציה להארכה.\r\nהיקף המשרה - מלאה.\r\nסיוע לביצוע הדיווח הכספי/חשבונאי, לרבות יישום התקנים הבינלאומיים (IFRS) ולבקרות הקשורות לדיווח הכספיISOX לרבות תחשיבי מס של הבורסה והחברות הנמנות עם קבוצת חברות הבורסה.\r\nסיוע ככל שידרש בתחומי פעילות המחלקה.', 'sam.kin.1993@gmail.com', 'v.jpg-1585520118099כדכשכשדכ.jpeg', 'תוכנה', 'השרון', 'פעיל'),
(24, 'fgfgfgfgf', 'ooooooo', '2020-03-27', 'משרה מלאה', 'ppppppppppp', 'fsfsfsf', 'gfcd C:סאמר כנעאןלמידה עצמית של שפותserverSideNodeJsemail\r\node-mysql-crud-app-master\r\nnode adminApp.js', 'uuiuiuiucd C:סאמר כנעאןלמידה עצמית של שפותserverSideNodeJsemail\r\node-mysql-crud-app-master\r\nnode adminApp.js', 'sayyy@gmail.com', '20191226_204200.jpg-1585601323151ooooooo.jpeg', 'ייצור', 'הגליל העליון', 'פעיל'),
(25, '8787', 'כדכשכשדכ', '2020-03-12', 'משרה מלאה', 'בססבד', 'דגדשגשגדש', 'cd C:סאמר כנעאןלמידה עצמית של שפותserverSideNodeJsemail\r\node-mysql-crud-app-master\r\nnode adminApp.js', 'cd C:סאמר כנעאןלמידה עצמית של שפותserverSideNodeJsemail\r\node-mysql-crud-app-master\r\nnode adminApp.js', 'sam@hotmail.com', 'v.jpg-1585601350480כדכשכשדכ.jpeg', 'תוכנה', 'באר-שבע והדרום', 'פעיל'),
(26, '44444444444444', 'dfdfdf', '2020-03-28', 'משרה מלאה', 'sfsfsf', 'sreed.129.99', 'fdfdfcd C:סאמר כנעאןלמידה עצמית של שפותserverSideNodeJsemail\r\node-mysql-crud-app-master\r\nnode adminApp.js', 'cd C:סאמר כנעאןלמידה עצמית של שפותserverSideNodeJsemail\r\node-mysql-crud-app-master\r\nnode adminApp.js', 'john.beck@gmail.com', 'v.jpg-1585601377728dfdfdf.jpeg', 'חומרה', 'חיפה והקריות', 'פעיל'),
(30, '667756', 'cssfsf', '2022-08-09', 'משרה מלאה', 'ופא כנעאן', 'ירכא', 'עכעגעדגעדגעגכעגכ', 'עגכעדגעדגעעדזגע', 'as@hotmail.com', '20191226_204200.jpg-1586114650855cssfsf.jpeg', 'ייצור', 'הגליל המערבי', 'פעיל'),
(29, '777888', 'חומרה', '2018-02-02', 'עבודה מהבית', 'זסבזבזב', 'השרון', 'נמעיעיעיעידדדדדדדדדדדדדדדד', 'גדגדגדגגגגגגגגגגגגגגגגגגגגגגגגג', 'as@hotmail.com', 'v.jpg-1585840761946חומרה.jpeg', 'תוכנה', 'תל-אביב והמרכז', 'פעיל');

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci NOT NULL,
  `pass` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci NOT NULL,
  `cv` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3703 DEFAULT CHARSET=latin1;

--
-- הוצאת מידע עבור טבלה `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `pass`, `email`, `cv`) VALUES
(3702, 'סאמר', 'כנעאן', '123', 'sam.kin.1993@gmail.com', 'signupCv-1586214569227.docx');

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `user_job`
--

DROP TABLE IF EXISTS `user_job`;
CREATE TABLE IF NOT EXISTS `user_job` (
  `user_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `sendate` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`,`job_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- הוצאת מידע עבור טבלה `user_job`
--

INSERT INTO `user_job` (`user_id`, `job_id`, `sendate`) VALUES
(3702, 19, '2020-4-7'),
(3702, 16, '2020-4-7'),
(3702, 30, '2020-4-7'),
(3702, 15, '2020-4-7');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
