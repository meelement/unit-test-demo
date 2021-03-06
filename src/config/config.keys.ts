/**
 * Defines system configurations
 */
export enum Configuration {
  DB_TYPE = 'DB_TYPE',  
  DB_HOST = 'DB_HOST',
  DB_PORT = 'DB_PORT',
  DB_USERNAME = 'DB_USERNAME',
  DB_PASSWORD = 'DB_PASSWORD',
  DB_NAME = 'DB_NAME',
  // API
  API_PORT = 'API_PORT',
  API_KEY = 'API_KEY',
  API_SECRET = 'API_SECRET',

  // Redis
  REDIS_HOST = 'REDIS_HOST',
  REDIS_PORT = 'REDIS_PORT',
  REDIS_DB = 'REDIS_DB',
  REDIS_PASSWORD = 'REDIS_PASSWORD',
  REDIS_KEY_PRIFIX = 'REDIS_KEY_PRIFIX',
  CACHE_TTL = 'CACHE_TTL',



  // JWT
  JWT_SECRET = 'JWT_SECRET',
  AWS_ACCESS_KEY_ID           = 'AWS_ACCESS_KEY_ID',
  AWS_SECRET_ACCESS_KEY       = 'AWS_SECRET_ACCESS_KEY',
  AWS_BUCKET_REGION_NAME      = 'AWS_BUCKET_REGION_NAME',
  BUCKET_NAME                 = 'BUCKET_NAME',

  RABBITMQ_ASSIGNTAKS_USER='RABBITMQ_ASSIGNTAKS_USER',
  RABBITMQ_ASSIGNTAKS_PASSWORD='RABBITMQ_ASSIGNTAKS_PASSWORD',
  RABBITMQ_ASSIGNTAKS_HOST='RABBITMQ_ASSIGNTAKS_HOST',
  RABBITMQ_ASSIGNTAKS_PORT='RABBITMQ_ASSIGNTAKS_PORT',
  RABBITMQ_ASSIGNTAKS_QUEUE_NAME='RABBITMQ_ASSIGNTAKS_QUEUE_NAME',
  RABBITMQ_ASSIGNTAKS_QUEUE_LC_CALL='RABBITMQ_ASSIGNTAKS_QUEUE_LC_CALL',
  RABBITMQ_ASSIGNTAKS_VHOST='RABBITMQ_ASSIGNTAKS_VHOST',

  RABBITMQ_NOTIFY_USER='RABBITMQ_NOTIFY_USER',
  RABBITMQ_NOTIFY_PASSWORD='RABBITMQ_NOTIFY_PASSWORD',
  RABBITMQ_NOTIFY_HOST='RABBITMQ_NOTIFY_HOST',
  RABBITMQ_NOTIFY_PORT='RABBITMQ_NOTIFY_PORT',
  RABBITMQ_NOTIFY_QUEUE_NAME='RABBITMQ_NOTIFY_QUEUE_NAME',
  RABBITMQ_NOTIFY_VHOST='RABBITMQ_NOTIFY_VHOST',

  RABBITMQ_GENERATE_NEW_CONTRACT_QUEUE_NAME='RABBITMQ_GENERATE_NEW_CONTRACT_QUEUE_NAME',

  AI_SCORE_URL='AI_SCORE_URL',
  AI_SCORE_RELATIVE_URL='AI_SCORE_RELATIVE_URL',

  AI_X_VND_EKYC='AI_X_VND_EKYC',
  AI_EKYC_COMPANY='AI_EKYC_COMPANY',
  AI_EKYC_UPLOAD_IMAGE='AI_EKYC_UPLOAD_IMAGE',
  AI_EKYC_CHECK='AI_EKYC_CHECK',

  OTP_SMS_URL='OTP_SMS_URL',

  WRITE_LOGS_TO_FILE='WRITE_LOGS_TO_FILE',
  LOGDIR='LOGDIR',
  CDN='CDN',
  PREFIX_S3='PREFIX_S3'
  }
