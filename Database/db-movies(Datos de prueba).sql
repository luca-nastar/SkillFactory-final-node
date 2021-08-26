-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-08-2021 a las 23:30:37
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db-movies`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `cover_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `name`, `description`, `cover_img`) VALUES
(1, 'El Padrino', 'Don Vito Corleone, conocido dentro de los círculos del hampa como \'El Padrino\', es el patriarca de una de las cinco familias que ejercen el mando de la Cosa Nostra en Nueva York en los años ccuarenta. Don Corleone tiene cuatro hijos: una chica, Connie, y tres varones; Sonny, Michael y Fredo. Cuando el Padrino reclina intervenir en el negocio de estupefacientes, empieza una cruenta lucha de violentos episodios entre las distintas familias del crimen organizado.', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wLXd1Cd0XW7DhXayfC0Ok5ago9r.jpg'),
(2, 'Sueño de fuga', 'Dos hombres encarcelados se unen durante varios años, encontrando consuelo y eventual redención a través de actos de decencia común.', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'),
(3, 'Batman: El caballero de la noche', 'Batman/Bruce Wayne (Christian Bale) regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon (Gary Oldman) y del Fiscal del Distrito Harvey Dent (Aaron Eckhart), Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker (Heath Ledger), un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/o8i8EDSWiwzTIiaMgyPnESKYIVd.jpg'),
(4, 'Forrest Gump', 'Forrest Gump es un chico con deficiencias mentales no muy profundas y con alguna incapacidad motora que, a pesar de todo, llegará a convertirse, entre otras cosas, en un héroe durante la Guerra del Vietnam. Su persistencia y bondad le llevarán a conseguir una gran fortuna, ser objeto del clamor popular y a codearse con las más altas esferas sociales y políticas del país. Siempre sin olvidar a Jenny, su gran amor desde que era niño.', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/azV6hV99lYkdhydsQbJCI6FqMl4.jpg'),
(5, 'Origen', 'Dom Cobb es un ladrón hábil, el mejor de todos, especializado en el peligroso arte de extracción: el robo de secretos valiosos desde las profundidades del subconsciente durante el estado de sueño cuando la mente está más vulnerable. Esta habilidad excepcional de Cobb le ha hecho un jugador codiciado en el traicionero nuevo mundo de espionaje corporativo, pero al mismo tiempo, le ha convertido en un fugitivo internacional y ha tenido que sacrificar todo que le importaba. Ahora a Cobb se le ofrece una oportunidad para redimirse. Con un último trabajo podría recuperar su vida anterior, pero solamente si logra lo imposible.', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg'),
(6, 'El señor de los anillos: Las dos torres', 'La Compañía del Anillo se ha disuelto. El portador del anillo Frodo y su fiel amigo Sam se dirigen hacia Mordor para destruir el Anillo Único y acabar con el poder de Sauron. Mientras, y tras la dura batalla contra los orcos donde cayó Boromir, el hombre Aragorn, el elfo Legolas y el enano Gimli intentan rescatar a los medianos Merry y Pipin, secuestrados por los ogros de Mordor. Por su parte, Saurón y el traidor Sarumán continúan con sus planes en Mordor, en espera de la guerra contra las razas libres de la Tierra Media.', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qHEU9067PL8iIZULg7q58NvoWlS.jpg'),
(7, 'Interestelar', 'Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nrSaXF39nDfAAeLKksRCyvSzI2a.jpg'),
(8, 'Volver al futuro', 'El adolescente Marty McFly es amigo de Doc, un científico al que todos toman por loco. Cuando Doc crea una máquina para viajar en el tiempo, un error fortuito hace que Marty llegue a 1955, año en el que sus futuros padres aún no se habían conocido. Después de impedir su primer encuentro, deberá conseguir que se conozcan y se casen; de lo contrario, su existencia no sería posible.', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ldJzO9D40mCVeDaZQ1986t8rguZ.jpg'),
(9, 'Avengers: Endgame', 'Después de los devastadores eventos de los Vengadores: Infinity War (2018), el universo está en ruinas. Con la ayuda de los aliados restantes, los Vengadores se reúnen una vez más para revertir las acciones de Thanos y restaurar el equilibrio del universo.', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/br6krBFpaYmCSglLBWRuhui7tPc.jpg'),
(10, 'Avengers: Infinity War', 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo para intentar derrotar al poderoso Thanos antes de que su ataque de devastación y ruina ponga fin al universo.', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rDLmMzkaFMFWF1UnnlboMfifVXM.jpg'),
(11, 'Soul', 'La película nos cuenta la historia de Joe Gardner, quien desea convertirse en un músico de jazz reconocido, pero termina abandonando este sueño para convertirse en maestro. Después de ser atropellado, llega a un lugar misterioso donde aprende el significado de la vida.', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gI9oVLHXgPYidW2W4A7p1pYW9QB.jpg'),
(12, 'Joker', 'Arthur Fleck (Phoenix) es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en el popular personaje de DC Comics Joker, conocido como archivillano de Batman, pero que en este film tomará un cariz más realista y oscuro.', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v0eQLbzT6sWelfApuYsEkYpzufl.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `full_name`, `username`, `password`, `role`) VALUES
(1, 'Admin User', 'admin', '$2b$10$Uru3PGIsE1cZYSzelS8ZSeBsGnx54Pl76UEIzAuojLeNpeEKB1.d6', 'ADMIN_ROLE'),
(43, 'Normal User', 'normaluser', '$2b$10$rLs75cts.syea.25rR6YUeuCCCTqjW0L5WndFURYmcztnRpFdpQ7m', 'USER_ROLE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_movie`
--

CREATE TABLE `user_movie` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_movie`
--

INSERT INTO `user_movie` (`id`, `id_user`, `id_movie`) VALUES
(1, 1, 1),
(2, 1, 3),
(3, 1, 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `movies_un` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_un` (`username`);

--
-- Indices de la tabla `user_movie`
--
ALTER TABLE `user_movie`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_movies_un` (`id`),
  ADD KEY `user_movies_FK` (`id_user`),
  ADD KEY `user_movies_FK_1` (`id_movie`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `user_movie`
--
ALTER TABLE `user_movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `user_movie`
--
ALTER TABLE `user_movie`
  ADD CONSTRAINT `user_movies_FK` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_movies_FK_1` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
