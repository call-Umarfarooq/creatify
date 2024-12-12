import React from "react";
import NavTwo from "../Elements/NavTwo";
import AvatarCard from "./AvatarCard";
import Link from "next/link";

const SelectAvatar = () => {
  return (
    <div className="bg2 gradient-bg1">
      <div className="relative linearG h-screen w-screen flex-col overflow-x-hidden pt-[72px]">
        <NavTwo />
        <div className="px-8 h-full overflow-y-auto">
          <div className="flex flex-col h-full max-w-[700px] mx-auto">
            <div className="mt-6 flex flex-col gap-2">
              <div className="text-color-title text-title-h3">
                Choose your favorite avatar
              </div>
              <div className="text-body-md  text-color-support">
                Pick your favorite Avatar, or let the AI choose the best match
                for you.
              </div>
            </div>
            <div className="relative mt-3 flex justify-between w-full">
              <div
                role="tablist"
                aria-orientation="horizontal"
                className="h-9 flex-row flex items-center gap-6 rounded-lg text-neutral-500 dark:text-neutral-400 p-0"
                tabIndex={0}
                data-orientation="horizontal"
                style={{ outline: "none" }}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected="true"
                  aria-controls="radix-:r0:-content-library"
                  data-state="active"
                  id="radix-:r0:-trigger-library"
                  className="flex-center text-white whitespace-nowrap ring-offset-white transition-all duration-100 font-semibold text-color-support hover:text-color-title disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-color-title focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 pb-2 text-base"
                  tabIndex={-1}
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  Realistic Avatar
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-:r0:-content-community"
                  data-state="inactive"
                  id="radix-:r0:-trigger-community"
                  className="flex-center whitespace-nowrap ring-offset-white transition-all duration-100 font-semibold text-color-support hover:text-color-title disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-color-title focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 pb-2 text-base"
                  tabIndex={-1}
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  Styled Avatar
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-:r0:-content-custom"
                  data-state="inactive"
                  id="radix-:r0:-trigger-custom"
                  className=" hidden sm:flex
                   whitespace-nowrap ring-offset-white transition-all duration-100 font-semibold text-color-support hover:text-color-title disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-color-title focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 pb-2 text-base"
                  tabIndex={-1}
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  Custom Avatar
                </button>
              </div>

              <div className="sm:flex hidden items-center">
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center">
                  <svg
                    className="text-white"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <g>
                      <path
                        data-follow-fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19 5.5C11.544 5.5 5.5 11.544 5.5 19S11.544 32.5 19 32.5c2.546 0 4.927-.705 6.96-1.93.785-.473 1.178-.71 1.52-.668.342.041.632.331 1.212.912L38.88 41c.33.33.494.494.678.57a1 1 0 0 0 .765 0c.184-.076.349-.24.678-.57.33-.33.494-.494.57-.678a1 1 0 0 0 0-.765c-.076-.184-.24-.349-.57-.678L30.814 28.692c-.58-.58-.87-.87-.912-1.212-.042-.342.195-.735.669-1.521A13.437 13.437 0 0 0 32.5 19c0-7.456-6.044-13.5-13.5-13.5ZM8.5 19c0-5.799 4.701-10.5 10.5-10.5S29.5 13.201 29.5 19 24.799 29.5 19 29.5 8.5 24.799 8.5 19Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center">
                  <svg
                    className="text-white"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <g>
                      <path
                        data-follow-fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.583 8.02c-.448.577-.964 1.485-1.761 2.899l-2.6 4.612-.086.154c-.35.625-.728 1.3-1.355 1.756-.627.456-1.386.606-2.089.746l-.173.034-5.19 1.047c-1.59.321-2.614.532-3.3.78-.333.12-.482.213-.542.262.02.075.086.237.285.53.41.604 1.113 1.376 2.212 2.57l3.582 3.898.12.13c.487.526 1.013 1.094 1.252 1.831.24.737.148 1.506.064 2.217l-.02.176-.609 5.259c-.186 1.612-.302 2.65-.278 3.38.01.354.053.524.081.596.078.005.253-.008.593-.106.7-.203 1.652-.634 3.128-1.31l4.814-2.203.16-.074c.65-.3 1.354-.624 2.129-.624.775 0 1.478.324 2.128.624l.16.074 4.814 2.203c1.476.675 2.428 1.107 3.128 1.31.34.098.516.11.593.106.029-.072.07-.242.082-.597.024-.728-.092-1.767-.279-3.38l-.607-5.258-.021-.176c-.085-.71-.176-1.48.064-2.217.239-.737.765-1.305 1.251-1.83l.12-.13 3.583-3.898c1.098-1.195 1.803-1.967 2.212-2.57.199-.294.265-.456.285-.531-.06-.05-.21-.142-.543-.262-.686-.248-1.71-.459-3.3-.78l-5.19-1.047-.173-.034c-.702-.14-1.462-.29-2.089-.746s-1.005-1.131-1.355-1.756l-.086-.154-2.6-4.612c-.796-1.414-1.313-2.322-1.76-2.898-.218-.28-.352-.393-.417-.435-.066.042-.2.155-.417.435Zm.465-.457c0 .002-.008.006-.024.008.017-.008.025-.01.024-.008Zm-.073.008c-.015-.002-.024-.006-.024-.008 0-.001.008 0 .024.008ZM41.55 20.35c-.001 0-.008-.006-.015-.02.013.012.017.02.015.02Zm-.03-.067c-.003-.016-.001-.025 0-.026.002 0 .003.008 0 .026Zm-6.721 20.662c-.001-.001.003-.01.014-.02-.008.016-.014.022-.014.02Zm.054-.05c.014-.006.023-.008.024-.007.001.001-.006.005-.024.008Zm-21.728-.007s.01 0 .024.008c-.018-.003-.025-.007-.024-.008Zm.063.036c.012.012.016.02.015.021 0 .002-.006-.004-.014-.02ZM6.48 20.256c.002.001.003.01 0 .026-.002-.018-.001-.026 0-.026Zm-.014.072c-.008.015-.014.021-.016.02-.001 0 .002-.006.016-.02ZM21.214 6.18c.623-.802 1.495-1.607 2.786-1.607 1.29 0 2.163.805 2.786 1.607.6.773 1.225 1.881 1.947 3.163l2.657 4.714c.233.414.365.645.477.81a1.208 1.208 0 0 0 .113.145l.002.002.002.001a1.181 1.181 0 0 0 .172.062c.192.056.453.11.918.204l5.304 1.07c1.443.29 2.69.542 3.61.875.956.344 1.991.925 2.39 2.153.399 1.227-.097 2.306-.667 3.146-.55.81-1.411 1.747-2.407 2.83l-3.662 3.983c-.322.35-.5.547-.623.704a1.2 1.2 0 0 0-.094.134l-.007.013a.043.043 0 0 0-.002.005l-.001.002-.001.003a.148.148 0 0 0-.003.02 1.18 1.18 0 0 0-.003.163c.007.2.036.464.09.935l.622 5.376c.169 1.462.315 2.725.284 3.704-.033 1.015-.266 2.179-1.31 2.938-1.044.758-2.223.62-3.198.337-.94-.272-2.097-.802-3.435-1.414l-4.92-2.252a12.959 12.959 0 0 0-.863-.375 1.219 1.219 0 0 0-.155-.048l-.02-.003h-.006c-.002 0-.009 0-.02.003a1.219 1.219 0 0 0-.156.048c-.188.068-.43.177-.862.375l-4.92 2.252c-1.338.612-2.495 1.142-3.435 1.414-.975.283-2.154.421-3.199-.337-1.044-.759-1.276-1.923-1.309-2.938-.031-.979.115-2.242.284-3.704l.62-5.375c.055-.472.084-.736.09-.936a1.205 1.205 0 0 0-.005-.183l-.001-.003-.001-.002a1.197 1.197 0 0 0-.103-.151 13.008 13.008 0 0 0-.623-.704l-3.662-3.984c-.996-1.084-1.857-2.02-2.407-2.83-.57-.84-1.066-1.919-.667-3.146.399-1.228 1.434-1.809 2.389-2.153.921-.333 2.168-.584 3.61-.875l.115-.023 5.19-1.047c.465-.094.726-.148.917-.204a1.191 1.191 0 0 0 .172-.062l.003-.001.002-.002a1.194 1.194 0 0 0 .112-.145c.112-.165.244-.396.477-.81l2.657-4.714c.723-1.282 1.347-2.39 1.948-3.163Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div
                  className="flex h-10 w-10 cursor-pointer items-center justify-center"
                  id="radix-:r4:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <svg
                    className="text-white"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <g>
                      <path
                        data-follow-fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.657 11.274a.497.497 0 0 1 .843.363V39.5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.7 0 .883-.076a1 1 0 0 0 .541-.541c.076-.184.076-.417.076-.883V11.533c0-.902 0-1.737-.09-2.373-.088-.613-.341-1.672-1.42-2.137-1.078-.465-2.022.077-2.528.435-.525.37-1.132.943-1.788 1.562l-7.612 7.184c-.34.32-.509.48-.59.661a1 1 0 0 0-.022.766c.07.185.23.355.55.694.32.338.48.508.661.59a1 1 0 0 0 .765.021c.186-.07.356-.23.695-.55l7.536-7.112Zm1.702-1.469s-.006.004-.017.008l.017-.008Zm-.953-.396Zm17.937 27.317a.497.497 0 0 1-.843-.363V8.5c0-.466 0-.699-.076-.883a1 1 0 0 0-.542-.54C31.7 7 31.466 7 31 7s-.7 0-.883.076a1 1 0 0 0-.541.541c-.076.184-.076.417-.076.883v27.967c0 .902 0 1.736.09 2.373.088.613.341 1.672 1.42 2.137 1.078.465 2.022-.077 2.528-.435.525-.37 1.132-.943 1.788-1.562l7.612-7.184c.34-.32.509-.48.59-.661a1 1 0 0 0 .022-.766c-.07-.185-.23-.355-.55-.694-.32-.338-.48-.508-.661-.59a1 1 0 0 0-.765-.021c-.186.07-.356.23-.695.55l-7.536 7.112Zm-1.702 1.469.016-.008a.13.13 0 0 1-.016.008Zm.953.396.006.017s-.003-.005-.006-.017Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>

              <div
                id="ui_base_tabs_indicator-885b1a38-9d24-4ee0-9d1e-ec0f56e51d36"
                className="absolute bottom-0 left-0 h-1 rounded-full bg-brand duration-200"
                style={{ width: "109px", transform: "translateX(0px)" }}
              ></div>
            </div>
            <div className="mt-4 h-fit">
              <div className="flex h-10 items-center justify-between gap-3 rounded-2xl border border-line-1 border-solid bg-area-platform p-1">
                <div className="relative w-full">
                  <div
                    className="group border-transparent w-full truncate flex gap-2 items-center justify-between bg-area-platform border border-solid hover:border-brand has-[:focus]:border-brand has-[:focus]:bg-area-platform has-[:disabled]:border-line-1 h-8 rounded-lg pl-2 pr-2"
                    data-focus="false"
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <g>
                        <path
                          data-follow-fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19 5.5C11.544 5.5 5.5 11.544 5.5 19S11.544 32.5 19 32.5c2.546 0 4.927-.705 6.96-1.93.785-.473 1.178-.71 1.52-.668.342.041.632.331 1.212.912L38.88 41c.33.33.494.494.678.57a1 1 0 0 0 .765 0c.184-.076.349-.24.678-.57.33-.33.494-.494.57-.678a1 1 0 0 0 0-.765c-.076-.184-.24-.349-.57-.678L30.814 28.692c-.58-.58-.87-.87-.912-1.212-.042-.342.195-.735.669-1.521A13.437 13.437 0 0 0 32.5 19c0-7.456-6.044-13.5-13.5-13.5ZM8.5 19c0-5.799 4.701-10.5 10.5-10.5S29.5 13.201 29.5 19 24.799 29.5 19 29.5 8.5 24.799 8.5 19Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <input
                      className="h-full w-full select-none truncate bg-transparent placeholder:text-color-support placeholder:text-label-md focus:placeholder:text-color-disable disabled:cursor-not-allowed disabled:text-color-disable disabled:placeholder:text-color-disable"
                      value=""
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    data-loading="false"
                    className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-brand hover:bg-ux-brand-hover active:bg-ux-brand-press data-[loading=true]:bg-ux-brand-disable disabled:bg-ux-brand-disable h-8 rounded-lg px-3"
                  >
                    <div>Search</div>
                  </button>
                  <div className="flex h-10 w-10 items-center justify-center">
                    <svg
                      className="text-white"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <g>
                        <path
                          data-follow-fill="currentColor"
                          d="M38.322 39.57c.184-.076.348-.24.678-.57.33-.33.494-.494.57-.678a1 1 0 0 0 0-.765c-.076-.184-.24-.349-.57-.678L26.121 24 39 11.121c.33-.33.494-.494.57-.678a1 1 0 0 0 0-.765c-.076-.184-.24-.349-.57-.678-.33-.33-.494-.494-.678-.57a1 1 0 0 0-.765 0c-.184.076-.349.24-.678.57L24 21.879 11.121 9c-.33-.33-.494-.494-.678-.57a1 1 0 0 0-.765 0c-.184.076-.349.24-.678.57-.33.33-.494.494-.57.678a1 1 0 0 0 0 .765c.076.184.24.349.57.678L21.879 24 9 36.879c-.33.33-.494.494-.57.678a1 1 0 0 0 0 .765c.076.184.24.349.57.678.33.33.494.494.678.57a1 1 0 0 0 .765 0c.184-.076.349-.24.678-.57L24 26.121 36.879 39c.33.33.494.494.678.57a1 1 0 0 0 .765 0Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="size-full overflow-hidden overflow-y-auto flex-1">
              <div className="grid mt-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <AvatarCard />
                <AvatarCard />
                <AvatarCard />
                <AvatarCard />
                <AvatarCard />
              </div>
            </div>

            <div className="flex h-20 w-full items-center justify-center gap-4 flex-none">
              <a href="/tool/link-to-video/generate-script?flowId=8db589c4-dbe9-49b6-9f6e-7b13a115288d">
                <button
                  data-loading="false"
                  className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-10 rounded-xl px-3 w-[108px]"
                >
                  <div>Back</div>
                </button>
              </a>
              <a href="/tool/link-to-video/preparing?flowId=8db589c4-dbe9-49b6-9f6e-7b13a115288d&amp;step=select-avatar&amp;reportParam=%7B%22avatarNum%22%3A0%7D">
                <button
                  data-loading="false"
                  className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-brand hover:bg-ux-brand-hover active:bg-ux-brand-press data-[loading=true]:bg-ux-brand-disable disabled:bg-ux-brand-disable h-10 rounded-xl px-3 w-[108px]"
                >
                  <Link href={"/preview"}>Next</Link>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAvatar;
