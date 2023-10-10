create database task_manager;

create schema t_m;
create extension "uuid-ossp";


create table if not exists t_m.job_titles (
	id_job_title serial,
	name_job_title varchar(30) NOT NULL,
	constraint job_id primary key(id_job_title),
	constraint j_name unique (name_job_title),
	constraint upper_letter_name_job_title check (left(name_job_title,1) = left(initcap(name_job_title),1))
);

CREATE INDEX  if not exists job_titles_in
ON t_m.job_titles (name_job_title);

create table if not exists t_m.locations (
	location_id serial,
	country varchar(30) NOT NULL,
	city varchar(30) NOT NULL,
	timezone TIMETZ NOT NULL,
	constraint loc_id primary key(location_id),
	constraint loc_coun unique (country, city),
	constraint upper_letter_country check (left(country,1) = left(initcap(country),1)),
	constraint upper_letter_city check (left(city,1) = left(initcap(city),1))
);

create table if not exists t_m.departments (
	department_id serial,
	name_department varchar(100) NOT NULL,
	constraint dep_id primary key(department_id),
	constraint dep_name unique (name_department),
	constraint upper_letter_name_department check (left(name_department,1) = left(initcap(name_department),1))
);

create table if not exists t_m.roles (
	role_id serial,
	name_role varchar(30) NOT NULL,
	property_description varchar(30) NOT NULL,
	constraint rol_id primary key(role_id),
	constraint rol_name unique (name_role),
	constraint rol_prop unique (property_description),
	constraint upper_letter_name_role check (left(name_role,1) = left(initcap(name_role),1))
);

create table if not exists t_m.project_types (
	project_type_id serial,
	name_project_type varchar(30) NOT NULL,
	constraint pt_id primary key(project_type_id),
	constraint pt_name unique (name_project_type),
	constraint upper_letter_name_project_type check (left(name_project_type,1) = left(initcap(name_project_type),1))
);

create table if not exists t_m.priority_types (
	priority_id serial,
	priority_name varchar(30) NOT NULL,
	constraint prior_id primary key(priority_id),
	constraint prior_name unique (priority_name),
	constraint upper_letter_priority_namee check (left(priority_name,1) = left(initcap(priority_name),1))
);

create table if not exists t_m.refresh_tokens (
	refresh_token_id uuid default uuid_generate_v1(),
	refresh_token bigint NOT NULL,
	expiretion_date TIMESTAMP,
	constraint refresh_id primary key(refresh_token_id),
	constraint refresh_tok unique (refresh_token)
);

create table if not exists t_m.project_statuces (
	project_statuce_id serial,
	project_statuce_name varchar(30) NOT NULL,
	constraint pr_status_id primary key(project_statuce_id),
	constraint pr_st_name unique (project_statuce_name),
	constraint upper_letter_project_statuce_name check (left(project_statuce_name,1) = left(initcap(project_statuce_name),1))
	
);

CREATE INDEX if not exists project_statutes_in
ON t_m.project_statuces (project_statuce_name);

create table t_m.task_statutes (
	status_task_id serial,
	name_status varchar(30) NOT NULL,
	constraint status_id primary key(status_task_id),
	constraint st_name unique (name_status),
	constraint upper_letter_name_status check (left(name_status,1) = left(initcap(name_status),1))
);

CREATE INDEX  if not exists task_statutes_in
ON t_m.task_statutes (name_status);
 
create table if not exists t_m.task_types (
	task_type_id serial,
	name_task_type varchar(30) NOT NULL,
	constraint tt_id primary key(task_type_id),
	constraint tt_name unique (name_task_type),
	constraint upper_letter_task_type check (left(name_task_type,1) = left(initcap(name_task_type),1))
);

create table if not exists t_m.verifications (
	verify_id uuid default uuid_generate_v1(),
	verify_code bigint NOT NULL,
	verify_status boolean NOT NULL,
	constraint con_verify_id primary key(verify_id),
	constraint verify_c_cone unique (verify_code)
);

create table if not exists t_m.users (
	user_id uuid default uuid_generate_v1(),
	id_job_title int,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
	email varchar(40) NOT NULL,
	password varchar NOT NULL,
	department_id int,
	role_id int,
	telephone varchar(20) NOT NULL,
	created_date date default current_date,
	location_id int,
	creator_id uuid,
	refresh_token_id uuid,
	verify_id uuid,
	constraint us_id primary key(user_id),
	constraint ft_name unique (first_name),
	constraint lt_name unique (last_name),
	constraint phon unique (telephone),
	constraint email_con unique (email),
	constraint us_type FOREIGN KEY (id_job_title) REFERENCES t_m.job_titles(id_job_title) ON DELETE set null,
	constraint dep_id FOREIGN KEY (department_id) REFERENCES t_m.departments(department_id) ON DELETE set null,
	constraint rl_id FOREIGN KEY (role_id) REFERENCES t_m.roles(role_id) ON DELETE set null,
	constraint loc_id FOREIGN KEY (location_id) REFERENCES t_m.locations(location_id) ON DELETE set null,
	constraint creat FOREIGN KEY (creator_id) REFERENCES t_m.users(user_id) ON DELETE restrict,
	constraint refresh_con FOREIGN KEY (refresh_token_id) REFERENCES t_m.refresh_tokens(refresh_token_id) ON DELETE set null,
	constraint verify_con FOREIGN KEY (verify_id) REFERENCES t_m.verifications(verify_id) ON DELETE restrict,
	constraint upper_letter_first_name check (first_name = initcap(first_name)),
	constraint upper_letter_last_name check (last_name = initcap(last_name)),
	constraint check_email_format check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$')
);

CREATE INDEX  if not exists idx_first_last_name
ON t_m.users (first_name, last_name);

CREATE INDEX  if not exists idx_id_user_type
ON t_m.users (id_job_title);

CREATE INDEX  if not exists  idx_department_id
ON t_m.users (department_id);

CREATE INDEX  if not exists idx_role_id
ON t_m.users (role_id);

CREATE INDEX  if not exists idx_location_id
ON t_m.users (location_id);

CREATE INDEX  if not exists idx_creator_id
ON t_m.users (creator_id);

CREATE INDEX  if not exists idx_refresh_token
ON t_m.users (refresh_token_id);

CREATE INDEX  if not exists idx_verify_id
ON t_m.users (verify_id);


create table if not exists t_m.projects (
	project_id uuid default uuid_generate_v1(),
	project_title varchar(200) NOT NULL,
	project_type_id int,
	start_date date NOT NULL,
	end_date date NOT NULL,
	project_description varchar(500) NOT NULL,
	project_statuce_id int,
	owner_user uuid,
	created_date date DEFAULT current_date,
	constraint proj_id primary key(project_id),
	constraint ptoj_tit unique (project_title),
	constraint pro_type FOREIGN KEY (project_type_id) REFERENCES t_m.project_types(project_type_id) ON DELETE set null,
	constraint pro_st FOREIGN KEY (project_statuce_id) REFERENCES t_m.project_statuces(project_statuce_id) ON DELETE set null,
	constraint own_con FOREIGN KEY (owner_user) REFERENCES t_m.users(user_id) ON DELETE restrict
);

CREATE INDEX  if not exists idx_project_title
ON t_m.projects (project_title);

CREATE INDEX  if not exists idx_project_type_id
ON t_m.projects (project_type_id);

CREATE INDEX  if not exists ix_pro_st
ON t_m.projects (project_statuce_id);

CREATE INDEX  if not exists ix_own
ON t_m.projects (owner_user);

create table if not exists t_m.key_project_role (
	project_id uuid,
	role_id int,
	constraint pr_id_con FOREIGN KEY (project_id) REFERENCES t_m.projects(project_id) ON DELETE restrict,
	constraint role_id_con FOREIGN KEY (role_id) REFERENCES t_m.roles(role_id) ON DELETE restrict
);

CREATE INDEX  if not exists id_id_con
ON t_m.key_project_role(project_id);

CREATE INDEX  if not exists id_role_id
ON t_m.key_project_role (role_id);

create table if not exists t_m.tasks (
	task_id uuid default uuid_generate_v1(),
	task_title varchar(100) NOT NULL,
	task_type_id int,
	task_start_date date NOT NULL,
	task_end_date date NOT NULL,
	estimate_time varchar(10) NOT NULL,
	owner_user uuid,
	assigner_user uuid,
	project_id uuid,
	priority_id int,
	status_task_id int,
	created_date date DEFAULT current_date,
	constraint ts_id primary key(task_id),
	constraint tk_name unique (task_title),
	constraint end_date check(task_end_date>task_start_date),
	constraint tk_type FOREIGN KEY (task_type_id) REFERENCES t_m.task_types(task_type_id) ON DELETE set null,
	constraint own_us FOREIGN KEY (owner_user) REFERENCES t_m.users(user_id) ON DELETE restrict,
	constraint assign_us FOREIGN KEY (assigner_user) REFERENCES t_m.users(user_id) ON DELETE restrict,
	constraint pr_id FOREIGN KEY (project_id) REFERENCES t_m.projects(project_id) ON DELETE restrict,
	constraint prior_id FOREIGN KEY (priority_id) REFERENCES t_m.priority_types(priority_id) ON DELETE set null,
	constraint st_id FOREIGN KEY (status_task_id) REFERENCES t_m.task_statutes(status_task_id) ON DELETE set null,
	constraint check_estimate_time_format CHECK (estimate_time ~ '^\d+[dwm]$')
);

CREATE INDEX if not exists idx_task_title
ON t_m.tasks (task_title);

CREATE INDEX if not exists idx_task_type_id
ON t_m.tasks (task_type_id);

CREATE INDEX if not exists idx_user_id
ON t_m.tasks (owner_user);

CREATE INDEX if not exists idx_assign_id
ON t_m.tasks (assigner_user);

CREATE INDEX if not exists idx_project_id
ON t_m.tasks (project_id);

CREATE INDEX if not exists idx_priority_id
ON t_m.tasks (priority_id);

CREATE INDEX if not exists idx_status_task_id
ON t_m.tasks (status_task_id);

create table if not exists t_m.comments (
	comment_id uuid default uuid_generate_v1(),
	content varchar(1000),
	task_id uuid,
	project_id uuid,
	user_id uuid,
	created_date date DEFAULT current_date,
	updated_date date,
	constraint com_id primary key (comment_id),
	constraint pr_id_con_com FOREIGN KEY (project_id) REFERENCES t_m.projects(project_id) ON DELETE restrict,
	constraint task_id_con_com FOREIGN KEY (task_id) REFERENCES t_m.tasks(task_id) ON DELETE restrict,
	constraint user_id_con_com FOREIGN KEY (user_id) REFERENCES t_m.users(user_id) ON DELETE restrict
);

CREATE INDEX if not exists id_com_task
ON t_m.comments(task_id);

CREATE INDEX if not exists id_com_user
ON t_m.comments (user_id);

CREATE INDEX if not exists id_com_project
ON t_m.comments (project_id);

