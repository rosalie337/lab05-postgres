CREATE TABLE songs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    artist TEXT NOT NULL,
    title TEXT NOT NULL,
    album TEXT
);

CREATE TABLE nba (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    player TEXT NOT NULL,
    team TEXT NOT NULL,
    position TEXT NOT NULL,
    number_ VALUE NOT NULL
);

CREATE TABLE planes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    manufacturer TEXT NOT NULL,
    model TEXT NOT NULL,
    range_ VALUE NOT NULL,
    top_speed VALUE NOT NULL,
)

CREATE TABLE guns (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    manufacturer TEXT NOT NULL,
    model TEXT NOT NULL,
    weight_ VALUE NOT NULL,
    mag_capacity VALUE NOT NULL,
)

CREATE TABLE clothes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    designer TEXT NOT NULL,
    collection_ TEXT NOT NULL,
    price VALUE NOT NULL,
)
