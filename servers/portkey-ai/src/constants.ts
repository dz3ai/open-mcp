export const OPENAPI_URL = "https://raw.githubusercontent.com/Portkey-AI/openapi/refs/heads/master/openapi.yaml"
export const SERVER_NAME = "portkey-ai"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./tools/servers_chat_completions/index.js",
  "./tools/createchatcompletion/index.js",
  "./tools/servers_completions/index.js",
  "./tools/createcompletion/index.js",
  "./tools/servers_collections/index.js",
  "./tools/post_collections/index.js",
  "./tools/get_collections/index.js",
  "./tools/servers_collections_collectionid_/index.js",
  "./tools/parameters_collections_collectionid_/index.js",
  "./tools/get_collections_collectionid_/index.js",
  "./tools/put_collections_collectionid_/index.js",
  "./tools/delete_collections_collectionid_/index.js",
  "./tools/servers_labels/index.js",
  "./tools/createlabel/index.js",
  "./tools/listlabels/index.js",
  "./tools/servers_labels_labelid_/index.js",
  "./tools/getlabel/index.js",
  "./tools/updatelabel/index.js",
  "./tools/deletelabel/index.js",
  "./tools/servers_prompts/index.js",
  "./tools/createprompt/index.js",
  "./tools/listprompts/index.js",
  "./tools/servers_prompts_promptid_/index.js",
  "./tools/getprompt/index.js",
  "./tools/updateprompt/index.js",
  "./tools/deleteprompt/index.js",
  "./tools/servers_prompts_promptid_versions/index.js",
  "./tools/getpromptversions/index.js",
  "./tools/servers_prompts_promptid_versions_versionid_/index.js",
  "./tools/getpromptbyversion/index.js",
  "./tools/updatepromptversion/index.js",
  "./tools/servers_prompts_promptid_makedefault/index.js",
  "./tools/updatepromptdefault/index.js",
  "./tools/servers_prompts_partials/index.js",
  "./tools/createpromptpartial/index.js",
  "./tools/listpromptpartials/index.js",
  "./tools/servers_prompts_partials_promptpartialid_/index.js",
  "./tools/getpromptpartial/index.js",
  "./tools/updatepromptpartial/index.js",
  "./tools/deletepromptpartial/index.js",
  "./tools/servers_prompts_partials_promptpartialid_versions/index.js",
  "./tools/getpromptpartialversions/index.js",
  "./tools/servers_prompts_partials_promptpartialid_makedefault/index.js",
  "./tools/updatepromptpartialdefault/index.js",
  "./tools/servers_prompts_promptid_completions/index.js",
  "./tools/createpromptcompletion/index.js",
  "./tools/servers_prompts_promptid_render/index.js",
  "./tools/createpromptrender/index.js",
  "./tools/servers_images_generations/index.js",
  "./tools/createimage/index.js",
  "./tools/servers_images_edits/index.js",
  "./tools/createimageedit/index.js",
  "./tools/servers_images_variations/index.js",
  "./tools/createimagevariation/index.js",
  "./tools/servers_embeddings/index.js",
  "./tools/createembedding/index.js",
  "./tools/servers_audio_speech/index.js",
  "./tools/createspeech/index.js",
  "./tools/servers_audio_transcriptions/index.js",
  "./tools/createtranscription/index.js",
  "./tools/servers_audio_translations/index.js",
  "./tools/createtranslation/index.js",
  "./tools/servers_files/index.js",
  "./tools/listfiles/index.js",
  "./tools/createfile/index.js",
  "./tools/servers_files_file_id_/index.js",
  "./tools/deletefile/index.js",
  "./tools/retrievefile/index.js",
  "./tools/servers_files_file_id_content/index.js",
  "./tools/downloadfile/index.js",
  "./tools/servers_fine_tuning_jobs/index.js",
  "./tools/createfinetuningjob/index.js",
  "./tools/listpaginatedfinetuningjobs/index.js",
  "./tools/servers_fine_tuning_jobs_fine_tuning_job_id_/index.js",
  "./tools/retrievefinetuningjob/index.js",
  "./tools/servers_fine_tuning_jobs_fine_tuning_job_id_events/index.js",
  "./tools/listfinetuningevents/index.js",
  "./tools/servers_fine_tuning_jobs_fine_tuning_job_id_cancel/index.js",
  "./tools/cancelfinetuningjob/index.js",
  "./tools/servers_fine_tuning_jobs_fine_tuning_job_id_checkpoints/index.js",
  "./tools/listfinetuningjobcheckpoints/index.js",
  "./tools/listmodels/index.js",
  "./tools/retrievemodel/index.js",
  "./tools/deletemodel/index.js",
  "./tools/servers_moderations/index.js",
  "./tools/createmoderation/index.js",
  "./tools/servers_assistants/index.js",
  "./tools/listassistants/index.js",
  "./tools/createassistant/index.js",
  "./tools/servers_assistants_assistant_id_/index.js",
  "./tools/getassistant/index.js",
  "./tools/modifyassistant/index.js",
  "./tools/deleteassistant/index.js",
  "./tools/servers_responses/index.js",
  "./tools/createresponse/index.js",
  "./tools/servers_responses_response_id_/index.js",
  "./tools/getresponse/index.js",
  "./tools/deleteresponse/index.js",
  "./tools/servers_responses_response_id_input_items/index.js",
  "./tools/listinputitems/index.js",
  "./tools/servers_threads/index.js",
  "./tools/createthread/index.js",
  "./tools/servers_threads_thread_id_/index.js",
  "./tools/getthread/index.js",
  "./tools/modifythread/index.js",
  "./tools/deletethread/index.js",
  "./tools/servers_threads_thread_id_messages/index.js",
  "./tools/listmessages/index.js",
  "./tools/createmessage/index.js",
  "./tools/servers_threads_thread_id_messages_message_id_/index.js",
  "./tools/getmessage/index.js",
  "./tools/modifymessage/index.js",
  "./tools/deletemessage/index.js",
  "./tools/servers_threads_runs/index.js",
  "./tools/createthreadandrun/index.js",
  "./tools/servers_threads_thread_id_runs/index.js",
  "./tools/listruns/index.js",
  "./tools/createrun/index.js",
  "./tools/servers_threads_thread_id_runs_run_id_/index.js",
  "./tools/getrun/index.js",
  "./tools/modifyrun/index.js",
  "./tools/servers_threads_thread_id_runs_run_id_submit_tool_outputs/index.js",
  "./tools/submittoolouputstorun/index.js",
  "./tools/servers_threads_thread_id_runs_run_id_cancel/index.js",
  "./tools/cancelrun/index.js",
  "./tools/servers_threads_thread_id_runs_run_id_steps/index.js",
  "./tools/listrunsteps/index.js",
  "./tools/servers_threads_thread_id_runs_run_id_steps_step_id_/index.js",
  "./tools/getrunstep/index.js",
  "./tools/listvectorstores/index.js",
  "./tools/createvectorstore/index.js",
  "./tools/getvectorstore/index.js",
  "./tools/modifyvectorstore/index.js",
  "./tools/deletevectorstore/index.js",
  "./tools/listvectorstorefiles/index.js",
  "./tools/createvectorstorefile/index.js",
  "./tools/getvectorstorefile/index.js",
  "./tools/deletevectorstorefile/index.js",
  "./tools/createvectorstorefilebatch/index.js",
  "./tools/getvectorstorefilebatch/index.js",
  "./tools/cancelvectorstorefilebatch/index.js",
  "./tools/listfilesinvectorstorebatch/index.js",
  "./tools/servers_batches/index.js",
  "./tools/createbatch/index.js",
  "./tools/listbatches/index.js",
  "./tools/servers_batches_batch_id_/index.js",
  "./tools/retrievebatch/index.js",
  "./tools/servers_batches_batch_id_cancel/index.js",
  "./tools/cancelbatch/index.js",
  "./tools/servers_configs/index.js",
  "./tools/listconfigs/index.js",
  "./tools/createconfig/index.js",
  "./tools/servers_configs_slug_/index.js",
  "./tools/deleteconfig/index.js",
  "./tools/getconfig/index.js",
  "./tools/updateconfig/index.js",
  "./tools/servers_feedback/index.js",
  "./tools/createfeedback/index.js",
  "./tools/servers_feedback_id_/index.js",
  "./tools/updatefeedback/index.js",
  "./tools/servers_virtual_keys/index.js",
  "./tools/get_virtual_keys/index.js",
  "./tools/post_virtual_keys/index.js",
  "./tools/servers_virtual_keys_slug_/index.js",
  "./tools/get_virtual_keys_slug_/index.js",
  "./tools/put_virtual_keys_slug_/index.js",
  "./tools/delete_virtual_keys_slug_/index.js",
  "./tools/servers_admin_users_invites/index.js",
  "./tools/invites_create/index.js",
  "./tools/get_admin_users_invites/index.js",
  "./tools/servers_admin_users_invites_inviteid_/index.js",
  "./tools/get_admin_users_invites_inviteid_/index.js",
  "./tools/delete_admin_users_invites_inviteid_/index.js",
  "./tools/servers_admin_users_invites_inviteid_resend/index.js",
  "./tools/post_admin_users_invites_inviteid_resend/index.js",
  "./tools/servers_admin_users/index.js",
  "./tools/get_admin_users/index.js",
  "./tools/servers_admin_users_userid_/index.js",
  "./tools/get_admin_users_userid_/index.js",
  "./tools/delete_admin_users_userid_/index.js",
  "./tools/put_admin_users_userid_/index.js",
  "./tools/servers_admin_workspaces_workspaceid_users/index.js",
  "./tools/post_admin_workspaces_workspaceid_users/index.js",
  "./tools/get_admin_workspaces_workspaceid_users/index.js",
  "./tools/servers_admin_workspaces_workspaceid_users_userid_/index.js",
  "./tools/put_admin_workspaces_workspaceid_users_userid_/index.js",
  "./tools/delete_admin_workspaces_workspaceid_users_userid_/index.js",
  "./tools/get_admin_workspaces_workspaceid_users_userid_/index.js",
  "./tools/servers_admin_workspaces/index.js",
  "./tools/post_admin_workspaces/index.js",
  "./tools/get_admin_workspaces/index.js",
  "./tools/servers_admin_workspaces_workspaceid_/index.js",
  "./tools/put_admin_workspaces_workspaceid_/index.js",
  "./tools/get_admin_workspaces_workspaceid_/index.js",
  "./tools/delete_admin_workspaces_workspaceid_/index.js",
  "./tools/servers_logs/index.js",
  "./tools/post_logs/index.js",
  "./tools/servers_logs_exports_exportid_/index.js",
  "./tools/get_logs_exports_exportid_/index.js",
  "./tools/put_logs_exports_exportid_/index.js",
  "./tools/servers_logs_exports/index.js",
  "./tools/get_logs_exports/index.js",
  "./tools/post_logs_exports/index.js",
  "./tools/servers_logs_exports_exportid_start/index.js",
  "./tools/post_logs_exports_exportid_start/index.js",
  "./tools/servers_logs_exports_exportid_cancel/index.js",
  "./tools/post_logs_exports_exportid_cancel/index.js",
  "./tools/servers_logs_exports_exportid_download/index.js",
  "./tools/get_logs_exports_exportid_download/index.js",
  "./tools/servers_audit_logs/index.js",
  "./tools/get_audit_logs/index.js",
  "./tools/servers_api_keys_type_sub_type_/index.js",
  "./tools/post_api_keys_type_sub_type_/index.js",
  "./tools/servers_api_keys/index.js",
  "./tools/get_api_keys/index.js",
  "./tools/servers_api_keys_id_/index.js",
  "./tools/put_api_keys_id_/index.js",
  "./tools/get_api_keys_id_/index.js",
  "./tools/delete_api_keys_id_/index.js",
  "./tools/servers_analytics_graphs_requests/index.js",
  "./tools/get_analytics_graphs_requests/index.js",
  "./tools/servers_analytics_graphs_cost/index.js",
  "./tools/get_analytics_graphs_cost/index.js",
  "./tools/servers_analytics_graphs_latency/index.js",
  "./tools/get_analytics_graphs_latency/index.js",
  "./tools/servers_analytics_graphs_tokens/index.js",
  "./tools/get_analytics_graphs_tokens/index.js",
  "./tools/servers_analytics_graphs_users/index.js",
  "./tools/get_analytics_graphs_users/index.js",
  "./tools/servers_analytics_graphs_users_requests/index.js",
  "./tools/get_analytics_graphs_users_requests/index.js",
  "./tools/servers_analytics_graphs_errors/index.js",
  "./tools/get_analytics_graphs_errors/index.js",
  "./tools/servers_analytics_graphs_errors_rate/index.js",
  "./tools/get_analytics_graphs_errors_rate/index.js",
  "./tools/servers_analytics_graphs_errors_stacks/index.js",
  "./tools/get_analytics_graphs_errors_stacks/index.js",
  "./tools/servers_analytics_graphs_errors_status_codes/index.js",
  "./tools/get_analytics_graphs_errors_status_codes/index.js",
  "./tools/servers_analytics_graphs_requests_rescued/index.js",
  "./tools/get_analytics_graphs_requests_rescued/index.js",
  "./tools/servers_analytics_graphs_cache_hit_rate/index.js",
  "./tools/get_analytics_graphs_cache_hit_rate/index.js",
  "./tools/servers_analytics_graphs_cache_latency/index.js",
  "./tools/get_analytics_graphs_cache_latency/index.js",
  "./tools/servers_analytics_graphs_feedbacks/index.js",
  "./tools/get_analytics_graphs_feedbacks/index.js",
  "./tools/servers_analytics_graphs_feedbacks_scores/index.js",
  "./tools/get_analytics_graphs_feedbacks_scores/index.js",
  "./tools/servers_analytics_graphs_feedbacks_weighted/index.js",
  "./tools/get_analytics_graphs_feedbacks_weighted/index.js",
  "./tools/servers_analytics_graphs_feedbacks_ai_models/index.js",
  "./tools/get_analytics_graphs_feedbacks_ai_models/index.js",
  "./tools/servers_analytics_summary_cache/index.js",
  "./tools/get_analytics_summary_cache/index.js",
  "./tools/servers_analytics_groups_users/index.js",
  "./tools/get_analytics_groups_users/index.js",
  "./tools/servers_analytics_groups_ai_models/index.js",
  "./tools/get_analytics_groups_ai_models/index.js",
  "./tools/servers_analytics_groups_metadata_metadatakey_/index.js",
  "./tools/get_analytics_groups_metadata_metadatakey_/index.js"
]