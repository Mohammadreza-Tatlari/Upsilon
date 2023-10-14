//Component that recieves data from its parent and also show them in rendering process. this is the sidebarItems
interface SidebarProps{
  channel:{
    channelImageUrl: string,
    id: string,
    name: string,
    channelDescription: string,
    title: string
  };
  onItemClicked: (name: any , title:any , image:any) => void
}

export default function SidebarItem({channel , onItemClicked }:SidebarProps ) {
  //this function handles and passes the information to parent. in this case: it is name title and image of the item in sidebar
  function handleThisItemName(){
    onItemClicked(channel.name , channel.title , channel.channelImageUrl)
    console.log("HandleThisItemName is clicked");
  }

  return (
    <li key={channel.id} onClick={handleThisItemName} className="border-b-2 border-slate-900">
                <a
                  href="#"
                  className="flex items-center p-2 rounded-sm text-slate-900 hover:bg-gray-200 relative"
                >
                  <img
                    className="flex-shrink-0 w-16 h-16 transition duration-75"
                    src={channel.channelImageUrl}
                    alt="BluishProfile"
                  />
                  <div className="w-auto relative overflow-clip truncate">
                  <span className="flex-1 ml-3 text-lg font-bold whitespace-nowrap truncate">{channel.name}</span>
                  <p className="flex-1 ml-3 truncate">{channel.channelDescription}</p>
                  </div>
                </a>
              </li>
  )
}
