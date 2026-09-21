do $$
begin
  if not exists (select 1 from pg_type where typname = 'prayer_type') then
    create type public.prayer_type as enum ('congratulations', 'condolence', 'anniversary', 'others');
  end if;
end
$$;

alter table public.prayer_intentions
drop constraint if exists prayer_intentions_name_check;

alter table public.prayer_intentions
rename column name to prayer_type;

update public.prayer_intentions
set prayer_type = 'others'
where lower(trim(prayer_type)) not in ('congratulations', 'condolence', 'anniversary', 'others');

alter table public.prayer_intentions
alter column prayer_type type public.prayer_type using lower(trim(prayer_type))::public.prayer_type;

alter table public.prayer_intentions
alter column prayer_type set not null;
