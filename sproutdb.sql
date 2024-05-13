--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2024-05-13 15:49:53

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 74227)
-- Name: climate_zone; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.climate_zone (
    id integer NOT NULL,
    name character(40) NOT NULL
);


ALTER TABLE public.climate_zone OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 74185)
-- Name: light_level; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.light_level (
    name character(20) NOT NULL
);


ALTER TABLE public.light_level OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 74237)
-- Name: light_preferrence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.light_preferrence (
    plant_id integer NOT NULL,
    light_level_id character(20) NOT NULL,
    modifier real
);


ALTER TABLE public.light_preferrence OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 74304)
-- Name: plant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plant (
    id integer NOT NULL,
    name character(64) NOT NULL,
    preferred_watering_frequency character(64) NOT NULL,
    extra_info character(500),
    preferred_average_temperature character(64),
    preferred_pot_size character(64),
    sprout character(64),
    vegetative character(64),
    flowering character(64),
    mature character(40),
    humidity character(64),
    soil_ph character(64),
    preferred_watering_amount character(64),
    botanic_category character varying(255),
    image_link character(100)
);


ALTER TABLE public.plant OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 74197)
-- Name: plant_care; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plant_care (
    name character(30) NOT NULL
);


ALTER TABLE public.plant_care OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 74202)
-- Name: plant_care_preferrence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plant_care_preferrence (
    plant_care_id character(30) NOT NULL,
    plant_id integer NOT NULL
);


ALTER TABLE public.plant_care_preferrence OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 74342)
-- Name: plant_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.plant ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.plant_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 74207)
-- Name: season; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.season (
    id integer NOT NULL,
    name character(30) NOT NULL
);


ALTER TABLE public.season OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 74212)
-- Name: season_preferrence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.season_preferrence (
    season_id integer NOT NULL,
    plant_id integer NOT NULL,
    modifier real NOT NULL
);


ALTER TABLE public.season_preferrence OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 74217)
-- Name: soil; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.soil (
    id integer NOT NULL,
    name character(30) NOT NULL
);


ALTER TABLE public.soil OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 74222)
-- Name: soil_preferrence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.soil_preferrence (
    plant_id integer NOT NULL,
    soil_id integer NOT NULL,
    modifier real NOT NULL
);


ALTER TABLE public.soil_preferrence OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 74232)
-- Name: zone_preferrence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.zone_preferrence (
    plant_id integer NOT NULL,
    zone_id integer NOT NULL,
    modifier real NOT NULL
);


ALTER TABLE public.zone_preferrence OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 90269)
-- Name: plant_info; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.plant_info AS
 SELECT p.name,
    p.preferred_watering_frequency,
    p.extra_info,
    p.preferred_average_temperature,
    p.preferred_pot_size,
    p.sprout,
    p.vegetative,
    p.flowering,
    p.mature,
    p.humidity,
    p.soil_ph,
    p.preferred_watering_amount,
    p.botanic_category,
    ll.name AS light_level,
    pc.name AS plant_care,
    season.name AS season,
    soil.name AS soil,
    zone.name AS climate_zone
   FROM ((((((((((public.plant p
     LEFT JOIN public.light_preferrence lightp ON ((lightp.plant_id = p.id)))
     LEFT JOIN public.light_level ll ON ((ll.name = lightp.light_level_id)))
     LEFT JOIN public.plant_care_preferrence pcp ON ((pcp.plant_id = p.id)))
     LEFT JOIN public.plant_care pc ON ((pc.name = pcp.plant_care_id)))
     LEFT JOIN public.season_preferrence seasonp ON ((seasonp.plant_id = p.id)))
     LEFT JOIN public.season ON ((season.id = seasonp.season_id)))
     LEFT JOIN public.soil_preferrence soilp ON ((soilp.plant_id = p.id)))
     LEFT JOIN public.soil ON ((soil.id = soilp.soil_id)))
     LEFT JOIN public.zone_preferrence zonep ON ((zonep.plant_id = p.id)))
     LEFT JOIN public.climate_zone zone ON ((zonep.zone_id = zone.id)));


ALTER VIEW public.plant_info OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 90275)
-- Name: resources; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.resources (
    name character varying NOT NULL,
    link character varying NOT NULL,
    description character varying
);


ALTER TABLE public.resources OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 74293)
-- Name: season_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.season ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.season_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 226 (class 1259 OID 74294)
-- Name: soil_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.soil ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.soil_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 227 (class 1259 OID 74295)
-- Name: zone_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.climate_zone ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.zone_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4870 (class 0 OID 74227)
-- Dependencies: 222
-- Data for Name: climate_zone; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.climate_zone OVERRIDING SYSTEM VALUE VALUES (2, 'tropical                                ');
INSERT INTO public.climate_zone OVERRIDING SYSTEM VALUE VALUES (3, 'dry                                     ');
INSERT INTO public.climate_zone OVERRIDING SYSTEM VALUE VALUES (4, 'temperate                               ');
INSERT INTO public.climate_zone OVERRIDING SYSTEM VALUE VALUES (5, 'continental                             ');
INSERT INTO public.climate_zone OVERRIDING SYSTEM VALUE VALUES (6, 'polar                                   ');


--
-- TOC entry 4863 (class 0 OID 74185)
-- Dependencies: 215
-- Data for Name: light_level; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.light_level OVERRIDING SYSTEM VALUE VALUES ('full sun            ');
INSERT INTO public.light_level OVERRIDING SYSTEM VALUE VALUES ('partial sun         ');
INSERT INTO public.light_level OVERRIDING SYSTEM VALUE VALUES ('shade               ');
INSERT INTO public.light_level OVERRIDING SYSTEM VALUE VALUES ('artificial light    ');


--
-- TOC entry 4872 (class 0 OID 74237)
-- Dependencies: 224
-- Data for Name: light_preferrence; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.light_preferrence VALUES (3, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (3, 'partial sun         ', 1);
INSERT INTO public.light_preferrence VALUES (5, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (6, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (6, 'partial sun         ', 1);
INSERT INTO public.light_preferrence VALUES (6, 'shade               ', 1);
INSERT INTO public.light_preferrence VALUES (7, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (12, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (8, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (9, 'partial sun         ', 1);
INSERT INTO public.light_preferrence VALUES (13, 'partial sun         ', 1);
INSERT INTO public.light_preferrence VALUES (10, 'partial sun         ', 1);
INSERT INTO public.light_preferrence VALUES (11, 'partial sun         ', NULL);
INSERT INTO public.light_preferrence VALUES (14, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (15, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (16, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (17, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (18, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (19, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (20, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (21, 'full sun            ', 1);


--
-- TOC entry 4876 (class 0 OID 74304)
-- Dependencies: 228
-- Data for Name: plant; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (9, 'aloe vera                                                       ', '72                                                              ', 'indoor aloe vera plants rarely enter the flowering stage, if they do it takes 2-4 weeks                                                                                                                                                                                                                                                                                                                                                                                                                             ', '13-30                                                           ', 'any                                                             ', '1-3 days                                                        ', '6+ months                                                       ', '2-4 weeks                                                       ', 'several years                           ', '40-60%                                                          ', '5.5-6.5                                                         ', '5 cl                                                            ', 'plant', 'https://i.imgur.com/c16CgmO.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (3, 'strawberry                                                      ', '48                                                              ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '10-24                                                           ', 'medium                                                          ', '7-14 days                                                       ', '8-12 weeks                                                      ', '12-14 weeks                                                     ', '14-16 weeks                             ', '65-75%                                                          ', '5.5-6.5                                                         ', '2,5 cl                                                          ', 'fruit', 'https://i.imgur.com/c4MIrv7.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (6, 'cactus                                                          ', '360                                                             ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '25-30                                                           ', 'any                                                             ', '7-14 days                                                       ', '4-6 weeks                                                       ', '9-12 weeks                                                      ', '14-16 weeks                             ', '40-60%                                                          ', '5.0-6.5                                                         ', '6-12 cl                                                         ', 'plant', 'https://i.imgur.com/ETCovEk.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (5, 'basil                                                           ', '96                                                              ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '20-22                                                           ', 'extra small                                                     ', '5-10 days                                                       ', '4-6 weeks                                                       ', '8-12 weeks                                                      ', '50-60 days                              ', '70-85%                                                          ', '6.0-7.5                                                         ', 'until soil is wet                                               ', 'herb', 'https://i.imgur.com/Knh8YYn.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (8, 'garlic                                                          ', '168                                                             ', 'sprouting: 10-15 degree celsius,flowering/vegetative:15-18 , pre-harvest:18-26                                                                                                                                                                                                                                                                                                                                                                                                                                      ', '10-26                                                           ', 'extra small                                                     ', '7-14 days                                                       ', '4-6 months                                                      ', '2-4 weeks                                                       ', '7-8 months                              ', '50-60%                                                          ', '6.0-7.0                                                         ', '2,5 cl                                                          ', 'plant', 'https://i.imgur.com/WVg2x5l.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (7, 'cherry tomatoes                                                 ', '168                                                             ', 'cooler during night (17-19) warmer during day (21-29)                                                                                                                                                                                                                                                                                                                                                                                                                                                               ', '21-29                                                           ', 'extra large                                                     ', '7-14 days                                                       ', '4-6 weeks                                                       ', '9-12 weeks                                                      ', '14-16 weeks                             ', '40-60%                                                          ', '5.0-6.5                                                         ', '2,5 cl                                                          ', 'fruit', 'https://i.imgur.com/L2qgBUS.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (13, 'orchid                                                          ', '192                                                             ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '15-27                                                           ', 'extra small                                                     ', 'few weeks -several months                                       ', '4-8 months                                                      ', '2-3 months                                                      ', '2-5 years                               ', '40-50%                                                          ', '5.5-6.0                                                         ', '6 cl                                                            ', 'flower', 'https://i.imgur.com/vhdVSB4.jpg                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (10, 'spider plants                                                   ', '48                                                              ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '10-24                                                           ', 'large                                                           ', '1-3 weeks                                                       ', '3 weeks - 2 months                                              ', '2-4 weeks                                                       ', '3+ years                                ', '40-80%                                                          ', '6.0-7.5                                                         ', '2.5-5 cl                                                        ', 'plant', 'https://i.imgur.com/oTRHLlp.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (12, 'lemons                                                          ', '168                                                             ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '20-25                                                           ', 'large                                                           ', '14 days                                                         ', '2-5 years                                                       ', '2-4months                                                       ', '4 months                                ', '50%                                                             ', '6.0-7.0                                                         ', 'until soil is moist                                             ', 'fruit', 'https://i.imgur.com/u3bXpMA.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (11, 'monstera                                                        ', '216                                                             ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '18-30                                                           ', 'extra large                                                     ', '7-14 days                                                       ', '2-3 years                                                       ', '2-5 years                                                       ', '5+ years                                ', '60-70%                                                          ', '5.5-6.5                                                         ', '5-7.5 cl                                                        ', 'plant', 'https://i.imgur.com/oPerfjQ.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (14, 'Mint                                                            ', '48                                                              ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '13-21                                                           ', 'extra small                                                     ', '10-14 days                                                      ', '14-28 days                                                      ', '1-2 months                                                      ', '2+ months                               ', '40-50%                                                          ', '6.0-7.5                                                         ', 'NULL                                                            ', 'herb', 'NULL                                                                                                ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (15, 'spring onion                                                    ', '216                                                             ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '10-25                                                           ', 'medium                                                          ', '1-2 weeks                                                       ', '3-4 weeks                                                       ', '5-7 weeks                                                       ', '8-12 weeks                              ', '40-70%                                                          ', '6.0-7.0                                                         ', 'NULL                                                            ', 'herb', 'https://i.imgur.com/QJ761BQ.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (16, 'oregano                                                         ', '72                                                              ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '18-24                                                           ', 'large                                                           ', '3-4 weeks                                                       ', '4-8 weeks                                                       ', '3-4 months                                                      ', '4-5 months                              ', '40-60%                                                          ', '6.5-7.5                                                         ', 'NULL                                                            ', 'herb', 'https://i.imgur.com/HmYR5EU.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (19, 'parsely                                                         ', '84                                                              ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '22-30                                                           ', 'large                                                           ', '2-4 weeks                                                       ', '6-10 weeks                                                      ', '12-18 months                                                    ', '18+ months                              ', '40-60%                                                          ', '6.0-7.0                                                         ', 'NULL                                                            ', 'herb', 'https://i.imgur.com/RIrtzdG.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (18, 'cucumber                                                        ', '168                                                             ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '22-26                                                           ', 'large                                                           ', '7-14 days                                                       ', '3-4 weeks                                                       ', '4-6 weeks                                                       ', '6 -10 weeks                             ', '60-70%                                                          ', '6.0-7.0                                                         ', 'NULL                                                            ', 'plant', 'https://i.imgur.com/7f6sGHp.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (17, 'chili                                                           ', '128                                                             ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '20-29                                                           ', 'large                                                           ', '1-3 weeks                                                       ', '14-28 days                                                      ', '3 months                                                        ', '6 months                                ', '50%                                                             ', '6.5-7.0                                                         ', 'NULL                                                            ', 'plant', 'https://i.imgur.com/NXcVg4i.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (20, 'kumquat                                                         ', '48                                                              ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '22-23                                                           ', 'large                                                           ', '4-12 weeks                                                      ', '6-12 months                                                     ', '2-3 years                                                       ', '3-4 years                               ', '50-60%                                                          ', '5.5-6.5                                                         ', 'NULL                                                            ', 'fruit', 'https://i.imgur.com/9tHBoQJ.png                                                                     ');
INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (21, 'bonsai                                                          ', '72                                                              ', 'NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', '15-23                                                           ', 'small                                                           ', '1-2 months                                                      ', '1-5 years                                                       ', '3-7 years                                                       ', '3-10 years                              ', '40-60%                                                          ', '6.0-7.0                                                         ', 'NULL                                                            ', 'plant ', 'https://i.imgur.com/5VxkKwc.png                                                                     ');


--
-- TOC entry 4864 (class 0 OID 74197)
-- Dependencies: 216
-- Data for Name: plant_care; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.plant_care VALUES ('pruning                       ');
INSERT INTO public.plant_care VALUES ('trimming                      ');
INSERT INTO public.plant_care VALUES ('fertilizer                    ');
INSERT INTO public.plant_care VALUES ('repotting                     ');


--
-- TOC entry 4865 (class 0 OID 74202)
-- Dependencies: 217
-- Data for Name: plant_care_preferrence; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 3);
INSERT INTO public.plant_care_preferrence VALUES ('pruning                       ', 5);
INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 6);
INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 7);
INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 12);
INSERT INTO public.plant_care_preferrence VALUES ('pruning                       ', 12);
INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 8);
INSERT INTO public.plant_care_preferrence VALUES ('pruning                       ', 9);
INSERT INTO public.plant_care_preferrence VALUES ('repotting                     ', 9);
INSERT INTO public.plant_care_preferrence VALUES ('pruning                       ', 13);
INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 13);
INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 11);
INSERT INTO public.plant_care_preferrence VALUES ('pruning                       ', 10);
INSERT INTO public.plant_care_preferrence VALUES ('pruning                       ', 14);
INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 15);
INSERT INTO public.plant_care_preferrence VALUES ('pruning                       ', 16);
INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 17);
INSERT INTO public.plant_care_preferrence VALUES ('repotting                     ', 18);
INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 19);
INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 20);
INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 21);


--
-- TOC entry 4878 (class 0 OID 90275)
-- Dependencies: 231
-- Data for Name: resources; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.resources VALUES ('sprout', 'https://i.imgur.com/A88pfLQ.png', 'standard image for sprout');
INSERT INTO public.resources VALUES ('vegetative', 'https://i.imgur.com/kP702Ij.png', 'standard image for vegetative plant');
INSERT INTO public.resources VALUES ('flowering', 'https://i.imgur.com/aAdKX6Z.png', 'standard image for flowering plant');
INSERT INTO public.resources VALUES ('mature', 'https://i.imgur.com/BDL6MYn.png', 'standard image for mature plant');
INSERT INTO public.resources VALUES ('pot', 'https://i.imgur.com/M974H0L.png', 'standard image for dead plant');


--
-- TOC entry 4866 (class 0 OID 74207)
-- Dependencies: 218
-- Data for Name: season; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (14, 'early spring                  ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (15, 'late spring                   ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (16, 'early summer                  ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (17, 'late summer                   ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (18, 'early autumn                  ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (19, 'late autumn                   ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (20, 'early winter                  ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (21, 'late winter                   ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (22, 'any                           ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (27, 'spring                        ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (28, 'summer                        ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (29, 'winter                        ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (30, 'autumn                        ');


--
-- TOC entry 4867 (class 0 OID 74212)
-- Dependencies: 219
-- Data for Name: season_preferrence; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.season_preferrence VALUES (14, 3, 1);
INSERT INTO public.season_preferrence VALUES (18, 3, 1);
INSERT INTO public.season_preferrence VALUES (15, 5, 1);
INSERT INTO public.season_preferrence VALUES (15, 6, 1);
INSERT INTO public.season_preferrence VALUES (16, 6, 1);
INSERT INTO public.season_preferrence VALUES (15, 7, 1);
INSERT INTO public.season_preferrence VALUES (14, 12, 1);
INSERT INTO public.season_preferrence VALUES (19, 12, 1);
INSERT INTO public.season_preferrence VALUES (20, 8, 1);
INSERT INTO public.season_preferrence VALUES (19, 8, 1);
INSERT INTO public.season_preferrence VALUES (22, 9, 1);
INSERT INTO public.season_preferrence VALUES (27, 13, 1);
INSERT INTO public.season_preferrence VALUES (28, 13, 1);
INSERT INTO public.season_preferrence VALUES (30, 10, 1);
INSERT INTO public.season_preferrence VALUES (28, 11, 1);
INSERT INTO public.season_preferrence VALUES (27, 14, 1);
INSERT INTO public.season_preferrence VALUES (27, 15, 1);
INSERT INTO public.season_preferrence VALUES (27, 16, 1);
INSERT INTO public.season_preferrence VALUES (28, 16, 1);
INSERT INTO public.season_preferrence VALUES (28, 18, 1);
INSERT INTO public.season_preferrence VALUES (27, 19, 1);
INSERT INTO public.season_preferrence VALUES (14, 20, 1);
INSERT INTO public.season_preferrence VALUES (27, 21, 1);


--
-- TOC entry 4868 (class 0 OID 74217)
-- Dependencies: 220
-- Data for Name: soil; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.soil OVERRIDING SYSTEM VALUE VALUES (5, 'loamy soil                    ');
INSERT INTO public.soil OVERRIDING SYSTEM VALUE VALUES (6, 'potting mix                   ');
INSERT INTO public.soil OVERRIDING SYSTEM VALUE VALUES (4, 'well draining                 ');


--
-- TOC entry 4869 (class 0 OID 74222)
-- Dependencies: 221
-- Data for Name: soil_preferrence; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.soil_preferrence VALUES (3, 4, 1);
INSERT INTO public.soil_preferrence VALUES (5, 4, 1);
INSERT INTO public.soil_preferrence VALUES (6, 4, 1);
INSERT INTO public.soil_preferrence VALUES (7, 4, 1);
INSERT INTO public.soil_preferrence VALUES (12, 4, 1);
INSERT INTO public.soil_preferrence VALUES (8, 4, 1);
INSERT INTO public.soil_preferrence VALUES (9, 4, 1);
INSERT INTO public.soil_preferrence VALUES (13, 4, 1);
INSERT INTO public.soil_preferrence VALUES (10, 4, 1);
INSERT INTO public.soil_preferrence VALUES (11, 4, 1);
INSERT INTO public.soil_preferrence VALUES (14, 4, 1);
INSERT INTO public.soil_preferrence VALUES (15, 4, 1);
INSERT INTO public.soil_preferrence VALUES (16, 4, 1);
INSERT INTO public.soil_preferrence VALUES (17, 4, 1);
INSERT INTO public.soil_preferrence VALUES (18, 4, 1);
INSERT INTO public.soil_preferrence VALUES (19, 4, 1);
INSERT INTO public.soil_preferrence VALUES (20, 4, 1);
INSERT INTO public.soil_preferrence VALUES (21, 4, 1);


--
-- TOC entry 4871 (class 0 OID 74232)
-- Dependencies: 223
-- Data for Name: zone_preferrence; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.zone_preferrence VALUES (3, 4, 1);
INSERT INTO public.zone_preferrence VALUES (5, 2, 1);
INSERT INTO public.zone_preferrence VALUES (6, 4, 1);
INSERT INTO public.zone_preferrence VALUES (7, 4, 1);
INSERT INTO public.zone_preferrence VALUES (7, 2, 1);
INSERT INTO public.zone_preferrence VALUES (12, 4, 1);
INSERT INTO public.zone_preferrence VALUES (8, 4, 1);
INSERT INTO public.zone_preferrence VALUES (9, 2, 1);
INSERT INTO public.zone_preferrence VALUES (13, 2, 1);
INSERT INTO public.zone_preferrence VALUES (13, 4, 1);
INSERT INTO public.zone_preferrence VALUES (10, 2, 1);
INSERT INTO public.zone_preferrence VALUES (11, 2, 1);
INSERT INTO public.zone_preferrence VALUES (14, 4, 1);
INSERT INTO public.zone_preferrence VALUES (15, 4, 1);
INSERT INTO public.zone_preferrence VALUES (16, 4, 1);
INSERT INTO public.zone_preferrence VALUES (16, 2, 1);
INSERT INTO public.zone_preferrence VALUES (18, 2, 1);
INSERT INTO public.zone_preferrence VALUES (19, 4, 1);
INSERT INTO public.zone_preferrence VALUES (20, 2, 1);
INSERT INTO public.zone_preferrence VALUES (21, 4, 1);


--
-- TOC entry 4897 (class 0 OID 0)
-- Dependencies: 229
-- Name: plant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.plant_id_seq', 21, true);


--
-- TOC entry 4898 (class 0 OID 0)
-- Dependencies: 225
-- Name: season_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.season_id_seq', 30, true);


--
-- TOC entry 4899 (class 0 OID 0)
-- Dependencies: 226
-- Name: soil_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.soil_id_seq', 9, true);


--
-- TOC entry 4900 (class 0 OID 0)
-- Dependencies: 227
-- Name: zone_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.zone_id_seq', 7, true);


--
-- TOC entry 4686 (class 2606 OID 74189)
-- Name: light_level pk_light_level; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.light_level
    ADD CONSTRAINT pk_light_level PRIMARY KEY (name);


--
-- TOC entry 4704 (class 2606 OID 74241)
-- Name: light_preferrence pk_light_preferrence; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.light_preferrence
    ADD CONSTRAINT pk_light_preferrence PRIMARY KEY (plant_id, light_level_id);


--
-- TOC entry 4706 (class 2606 OID 74310)
-- Name: plant pk_plant; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plant
    ADD CONSTRAINT pk_plant PRIMARY KEY (id);


--
-- TOC entry 4688 (class 2606 OID 74201)
-- Name: plant_care pk_plant_care; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plant_care
    ADD CONSTRAINT pk_plant_care PRIMARY KEY (name);


--
-- TOC entry 4690 (class 2606 OID 74206)
-- Name: plant_care_preferrence pk_plant_care_preferrence; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plant_care_preferrence
    ADD CONSTRAINT pk_plant_care_preferrence PRIMARY KEY (plant_care_id, plant_id);


--
-- TOC entry 4692 (class 2606 OID 74211)
-- Name: season pk_season; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.season
    ADD CONSTRAINT pk_season PRIMARY KEY (id);


--
-- TOC entry 4694 (class 2606 OID 74216)
-- Name: season_preferrence pk_season_preferrence; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.season_preferrence
    ADD CONSTRAINT pk_season_preferrence PRIMARY KEY (season_id, plant_id);


--
-- TOC entry 4696 (class 2606 OID 74221)
-- Name: soil pk_soil; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.soil
    ADD CONSTRAINT pk_soil PRIMARY KEY (id);


--
-- TOC entry 4698 (class 2606 OID 74226)
-- Name: soil_preferrence pk_soil_preferrence; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.soil_preferrence
    ADD CONSTRAINT pk_soil_preferrence PRIMARY KEY (plant_id, soil_id);


--
-- TOC entry 4700 (class 2606 OID 74231)
-- Name: climate_zone pk_zone; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.climate_zone
    ADD CONSTRAINT pk_zone PRIMARY KEY (id);


--
-- TOC entry 4702 (class 2606 OID 74236)
-- Name: zone_preferrence pk_zone_preferrence; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.zone_preferrence
    ADD CONSTRAINT pk_zone_preferrence PRIMARY KEY (plant_id, zone_id);


--
-- TOC entry 4708 (class 2606 OID 90281)
-- Name: resources resources_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_pkey PRIMARY KEY (name);


--
-- TOC entry 4717 (class 2606 OID 74331)
-- Name: light_preferrence fk_light_preferrence_0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.light_preferrence
    ADD CONSTRAINT fk_light_preferrence_0 FOREIGN KEY (plant_id) REFERENCES public.plant(id);


--
-- TOC entry 4718 (class 2606 OID 74287)
-- Name: light_preferrence fk_light_preferrence_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.light_preferrence
    ADD CONSTRAINT fk_light_preferrence_1 FOREIGN KEY (light_level_id) REFERENCES public.light_level(name);


--
-- TOC entry 4709 (class 2606 OID 74242)
-- Name: plant_care_preferrence fk_plant_care_preferrence_0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plant_care_preferrence
    ADD CONSTRAINT fk_plant_care_preferrence_0 FOREIGN KEY (plant_care_id) REFERENCES public.plant_care(name);


--
-- TOC entry 4710 (class 2606 OID 74311)
-- Name: plant_care_preferrence fk_plant_care_preferrence_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plant_care_preferrence
    ADD CONSTRAINT fk_plant_care_preferrence_1 FOREIGN KEY (plant_id) REFERENCES public.plant(id);


--
-- TOC entry 4711 (class 2606 OID 74252)
-- Name: season_preferrence fk_season_preferrence_0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.season_preferrence
    ADD CONSTRAINT fk_season_preferrence_0 FOREIGN KEY (season_id) REFERENCES public.season(id);


--
-- TOC entry 4712 (class 2606 OID 74316)
-- Name: season_preferrence fk_season_preferrence_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.season_preferrence
    ADD CONSTRAINT fk_season_preferrence_1 FOREIGN KEY (plant_id) REFERENCES public.plant(id);


--
-- TOC entry 4713 (class 2606 OID 74321)
-- Name: soil_preferrence fk_soil_preferrence_0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.soil_preferrence
    ADD CONSTRAINT fk_soil_preferrence_0 FOREIGN KEY (plant_id) REFERENCES public.plant(id);


--
-- TOC entry 4714 (class 2606 OID 74267)
-- Name: soil_preferrence fk_soil_preferrence_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.soil_preferrence
    ADD CONSTRAINT fk_soil_preferrence_1 FOREIGN KEY (soil_id) REFERENCES public.soil(id);


--
-- TOC entry 4715 (class 2606 OID 74326)
-- Name: zone_preferrence fk_zone_preferrence_0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.zone_preferrence
    ADD CONSTRAINT fk_zone_preferrence_0 FOREIGN KEY (plant_id) REFERENCES public.plant(id);


--
-- TOC entry 4716 (class 2606 OID 74277)
-- Name: zone_preferrence fk_zone_preferrence_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.zone_preferrence
    ADD CONSTRAINT fk_zone_preferrence_1 FOREIGN KEY (zone_id) REFERENCES public.climate_zone(id);


--
-- TOC entry 4884 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT USAGE ON SCHEMA public TO sprout;


--
-- TOC entry 4885 (class 0 OID 0)
-- Dependencies: 222
-- Name: TABLE climate_zone; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.climate_zone TO sprout;


--
-- TOC entry 4886 (class 0 OID 0)
-- Dependencies: 215
-- Name: TABLE light_level; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.light_level TO sprout;


--
-- TOC entry 4887 (class 0 OID 0)
-- Dependencies: 224
-- Name: TABLE light_preferrence; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.light_preferrence TO sprout;


--
-- TOC entry 4888 (class 0 OID 0)
-- Dependencies: 228
-- Name: TABLE plant; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.plant TO sprout;


--
-- TOC entry 4889 (class 0 OID 0)
-- Dependencies: 216
-- Name: TABLE plant_care; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.plant_care TO sprout;


--
-- TOC entry 4890 (class 0 OID 0)
-- Dependencies: 217
-- Name: TABLE plant_care_preferrence; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.plant_care_preferrence TO sprout;


--
-- TOC entry 4891 (class 0 OID 0)
-- Dependencies: 218
-- Name: TABLE season; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.season TO sprout;


--
-- TOC entry 4892 (class 0 OID 0)
-- Dependencies: 219
-- Name: TABLE season_preferrence; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.season_preferrence TO sprout;


--
-- TOC entry 4893 (class 0 OID 0)
-- Dependencies: 220
-- Name: TABLE soil; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.soil TO sprout;


--
-- TOC entry 4894 (class 0 OID 0)
-- Dependencies: 221
-- Name: TABLE soil_preferrence; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.soil_preferrence TO sprout;


--
-- TOC entry 4895 (class 0 OID 0)
-- Dependencies: 223
-- Name: TABLE zone_preferrence; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.zone_preferrence TO sprout;


--
-- TOC entry 4896 (class 0 OID 0)
-- Dependencies: 230
-- Name: TABLE plant_info; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.plant_info TO sprout;


-- Completed on 2024-05-13 15:49:54

--
-- PostgreSQL database dump complete
--

