create database itcenter;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create type user_role as enum('teacher', 'admin');

create type gender as enum('male', 'female');

create table groups(
  id uuid primary key DEFAULT uuid_generate_v4() null,
  direction varchar(64) not null,
  number serial not null,
  teacher varchar(64) not null,
  day int not null,
  time int not null,
  photo text not null,
  room_name varchar(64) not null,
  created_at timestamp default current_timestamp,
  updated_at timestamp default null
);

create table pupils(
  id uuid primary key DEFAULT uuid_generate_v4() null,
  name varchar(64) not null,
  last_name varchar(64) not null,
  age int not null,
  phone bigint not null,
  username varchar(32) unique not null,
  photo text not null,
  gender gender not null,
  group_name varchar(64) not null,
  created_at timestamp default current_timestamp,
  updated_at timestamp default null,
  isDelete BOOLEAN NOT NULL DEFAULT FALSE,
  groups_id uuid not null,
  foreign key (groups_id) references groups(id)
);

create table users(
  id uuid primary key DEFAULT uuid_generate_v4() null,
  name varchar(255) not null,
  last_name varchar(255) not null,
  role user_role default 'teacher' not null,
  age int not null,
  direction varchar(64) not null,
  number bigint not null,
  username varchar(255) not null,
  photo text default null,
  gender gender not null,
  created_at timestamp default current_timestamp,
  updated_at timestamp default null,
  isDelete BOOLEAN NOT NULL DEFAULT FALSE,
  group_id uuid default null,
  pupils_id uuid default null,
  foreign key (group_id) references groups(id),
  foreign key (pupils_id) references pupils(id)
);

insert into
  users(
    name,
    last_name,
    role,
    age,
    direction,
    number,
    username,
    gender
  )
values
(
    'ali',
    'aliyev',
    'admin',
    24,
    'Backend Developer',
    998978887734,
    'hum0_yun',
    'male'
  );

create table rate (
  id uuid primary key DEFAULT uuid_generate_v4() null,
  title text not null,
  rate float not null,
  descr text not null,
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp null,
  groups_id uuid not null,
  users_id uuid not null,
  pupils_id uuid not null,
  foreign key (groups_id) references groups(id),
  foreign key (users_id) references users(id),
  foreign key (pupils_id) references pupils(id)
);

'fa73834e-3578-4c16-b8ce-ad89e0583b18' " 26302855-1ffe-4646-9b21-ff228eb2c038" "3344cfd9-73de-4994-b48c-4fc6d7623208"
INSERT INTO
  rate (
    title,
    rate,
    descr,
    groups_id,
    users_id,
    pupils_id
  )
VALUES
  (
    'Math Test',
    4.5,
    'A test on math concepts',
    'fa73834e-3578-4c16-b8ce-ad89e0583b18',
    '3344cfd9-73de-4994-b48c-4fc6d7623208',
    '26302855-1ffe-4646-9b21-ff228eb2c038'
  );

INSERT INTO
  users (
    name,
    last_name,
    role,
    age,
    direction,
    number,
    username,
    photo,
    gender,
    group_id,
    pupils_id
  )
VALUES
  (
    'John',
    'Doe',
    'teacher',
    30,
    'Math',
    1,
    'john123',
    'john.jpg',
    'male',
    'fa73834e-3578-4c16-b8ce-ad89e0583b18',
    '26302855-1ffe-4646-9b21-ff228eb2c038'
  );