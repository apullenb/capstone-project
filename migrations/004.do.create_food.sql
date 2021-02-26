CREATE TABLE IF NOT EXISTS food
(
 id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,   
 date           TIMESTAMPTZ DEFAULT now() NOT NULL,
 breakfast      text NOT NULL,
 lunch      text NOT NULL,
 dinner      text NOT NULL,
 snack      text NOT NULL,
water      integer NOT NULL,
 user_id        integer NOT NULL,
 CONSTRAINT "FK_51" FOREIGN KEY ( "user_id" ) REFERENCES "users" ( "user_id" )
);

CREATE INDEX "fkIdx_51" ON "food"
(
 "user_id"
);