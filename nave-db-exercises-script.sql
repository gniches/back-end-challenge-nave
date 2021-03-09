-- DROP TABLE public.navers;

CREATE TABLE public.navers (
	id uuid NOT NULL,
	"name" varchar NOT NULL,
	job_role varchar NOT NULL,
	birthdate date NOT NULL,
	admission_date date NOT NULL,
	created_at timestamp(0) NULL,
	updated_at timestamp(0) NULL,
	CONSTRAINT navers_pk PRIMARY KEY (id)
);

-- DROP TABLE public.projects;

CREATE TABLE public.projects (
	id uuid NOT NULL,
	"name" varchar NOT NULL,
	created_at timestamp(0) NULL,
	updated_at timestamp(0) NULL,
	CONSTRAINT projects_pk PRIMARY KEY (id)
);

-- DROP TABLE public.projects_navers;

CREATE TABLE public.projects_navers (
	id uuid NOT NULL,
	project_id uuid NOT NULL,
	naver_id uuid NOT NULL,
	CONSTRAINT projects_navers_fk FOREIGN KEY (naver_id) REFERENCES navers(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT projects_navers_fk_1 FOREIGN KEY (project_id) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE
);

delete from public.navers;
delete from public.projects;
delete from public.projects_navers;

/* INSERT NAVERS */

INSERT INTO public.navers (id,"name",job_role,birthdate,admission_date,created_at,updated_at)
	VALUES ('0bced4cc-9995-4915-9edb-7a967bee8e3a'::uuid,'Fernanda','Gerente de Projetos','1990-02-06','2014-02-08','2021-03-02',current_date);
INSERT INTO public.navers (id,"name",job_role,birthdate,admission_date,created_at,updated_at)
	VALUES ('d28c1f3d-a7db-4ede-80ad-81e5738312d1'::uuid,'Roberto','Comercial','1989-06-10','2012-06-12','2021-03-02',current_date);
INSERT INTO public.navers (id,"name",job_role,birthdate,admission_date,created_at,updated_at)
	VALUES ('8a3bf03a-ef10-4e8f-a1b5-0208810a50bf'::uuid,'Larissa','Desenvolvedora','1995-12-12','2018-02-06','2021-03-02',current_date);
INSERT INTO public.navers (id,"name",job_role,birthdate,admission_date,created_at,updated_at)
	VALUES ('5e35a421-8abd-4178-82b5-daff6a9c628e'::uuid,'Vanessa','Administrativo','1993-05-08','2016-08-10','2021-01-19',current_date);
INSERT INTO public.navers (id,"name",job_role,birthdate,admission_date,created_at,updated_at)
	VALUES ('9cadd375-8e69-4902-a3df-244db58f51a2'::uuid,'Marcos','Tester','1994-06-17','2015-02-19','2020-12-28',current_date);

/*INSERT PROJECTS */	

INSERT INTO public.projects (id,"name",created_at,updated_at)
	VALUES ('f947a580-bf78-4f3d-8ff8-8a78b37e9ea7'::uuid,'Projeto 1A','2021-03-03','2021-03-04');
INSERT INTO public.projects (id,"name",created_at,updated_at)
	VALUES ('2ac2d773-0bd7-4132-97de-2b68d017a541'::uuid,'Projeto 2A','2021-02-10','2021-03-01');
INSERT INTO public.projects (id,"name",created_at,updated_at)
	VALUES ('05cc02dd-fd34-4a7b-a862-988bde851f46'::uuid,'Projeto 3A','2020-12-10','2021-02-22');
INSERT INTO public.projects (id,"name",created_at,updated_at)
	VALUES ('5240eca6-1088-4456-bb76-17a5c02ed30b'::uuid,'Projeto 4A','2019-06-02','2021-01-28');

/* INSERT PROJECTS_NAVERS */

insert into public.projects_navers (id,project_id,naver_id)
	values ('cb4210fa-2170-4c5e-b613-d13117ec5aaa','f947a580-bf78-4f3d-8ff8-8a78b37e9ea7','0bced4cc-9995-4915-9edb-7a967bee8e3a');
insert into public.projects_navers (id,project_id,naver_id)
	values ('74bdd562-ba8d-4d93-b1ca-fcd065bc5f2f','2ac2d773-0bd7-4132-97de-2b68d017a541','d28c1f3d-a7db-4ede-80ad-81e5738312d1');
insert into public.projects_navers (id,project_id,naver_id)
	values ('573c01e1-0a6e-4ecb-946e-831dabe5b9cd','05cc02dd-fd34-4a7b-a862-988bde851f46','8a3bf03a-ef10-4e8f-a1b5-0208810a50bf');
insert into public.projects_navers (id,project_id,naver_id)
	values ('c9561360-17a6-4b4b-a5a1-79b8fa9915ce','05cc02dd-fd34-4a7b-a862-988bde851f46','5e35a421-8abd-4178-82b5-daff6a9c628e');
insert into public.projects_navers (id,project_id,naver_id)
	values ('a2de5071-ece3-476e-81a2-f8eaf47ef2a2','5240eca6-1088-4456-bb76-17a5c02ed30b','9cadd375-8e69-4902-a3df-244db58f51a2');
	
	
/*Queries*/

select * from public.navers
order by admission_date;

--

select
	projects."name" as Project_name,
	navers."name" as naver	
from
	projects
inner join projects_navers on projects_navers.project_id = projects.id
inner join navers on projects_navers.naver_id = navers.id;

--

	
	


















