create schema logs;

CREATE TABLE logs.data_logs( 
    log_id uuid default uuid_generate_v1(), 
    start_time TIMESTAMP,
	end_time TIMESTAMP,
    source TEXT, 
    success BOOLEAN, 
    error_code TEXT,
	action_task TEXT,
	constraint p_key_log primary key (log_id)
);

