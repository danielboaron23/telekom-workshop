/* Timeline card — Figma node 2958:205986 */

import { Icon, IconButton } from "@/components/ui/Icon";

function TaskItem({ last = false }: { last?: boolean }) {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className="flex w-full flex-col items-start gap-2">
        <p className="w-full truncate text-sm leading-5 font-medium text-ink">Task modified by: Efrain Megido</p>
        <p className="w-full text-xs leading-4 font-medium text-secondary-text">BA 1234567890</p>
        <div className="flex w-full items-center gap-2">
          <span className="flex max-h-6 min-h-6 items-center gap-1 rounded-full bg-black/10 px-2 py-1">
            <span className="text-center text-xs leading-4 font-medium text-black">Active</span>
          </span>
          <p className="min-w-0 flex-1 text-xs leading-4 font-medium text-secondary-text">
            Modified on: 16 Oct, 2020. 19:43
          </p>
        </div>
      </div>
      <div className="flex w-full items-center gap-4">
        <button className="min-w-0 flex-1 cursor-pointer text-left text-sm leading-5 font-medium text-info">
          View more
        </button>
        <div className="flex items-start gap-2">
          <IconButton src="/icons/ui/person-avatar-add.svg" label="Assign" />
          <IconButton src="/icons/ui/person-avatar-add.svg" label="Reassign" />
          <IconButton src="/icons/ui/add-document.svg" label="Add document" inset="inset-[4.17%_12.5%_4.17%_8.33%]" />
          <IconButton src="/icons/ui/delete-trash-bin.svg" label="Delete" />
        </div>
      </div>
      {!last && <div className="h-px w-full bg-black/12" />}
    </div>
  );
}

export function TimelineCard() {
  return (
    <div className="flex h-[698px] w-full flex-col overflow-clip rounded-card bg-paper shadow-card">
      <div className="flex w-full flex-col items-start gap-4 p-4">
        <div className="flex w-full flex-col items-end justify-center">
          <div className="flex w-full items-center justify-between pb-3">
            <p className="truncate text-sm leading-5 font-bold text-ink">Timeline</p>
          </div>
          <div className="h-px w-full bg-black/12" />
        </div>
        <div className="flex w-full items-center gap-2">
          <p className="min-w-0 flex-1 text-sm leading-4 font-medium text-black/87">Timeline</p>
          <IconButton src="/icons/ui/add-plus.svg" label="Add" inset="inset-[8.33%]" />
          <IconButton src="/icons/ui/filter-simple.svg" label="Filter" inset="inset-[8.33%]" />
          <IconButton src="/icons/ui/filter-configure.svg" label="Configure filters" inset="inset-[8.33%]" />
          <IconButton src="/icons/ui/menu-kebab.svg" label="More" inset="inset-[12.5%_41.67%]" />
        </div>
        <div className="flex h-8 w-full min-w-40 items-center gap-2 overflow-clip rounded-field border border-gray-300 px-3 py-2">
          <Icon src="/icons/ui/search-16.svg" />
          <input
            type="text"
            placeholder="Search"
            className="h-4 min-w-0 flex-1 bg-transparent text-xs leading-4 font-medium text-ink outline-none placeholder:text-secondary-text"
          />
        </div>
        <TaskItem />
        <TaskItem />
        <TaskItem last />
      </div>
    </div>
  );
}
