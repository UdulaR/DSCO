import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'

export const Events = () =>{
    return(<section id="events" className="py-12">
        
        <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-center font-bold text-5xl">Events</h1>
            
            <div className="rounded-xl text-white">
                <FullCalendar 

                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    height="auto"
                    eventColor= '#F97316'
                    
                    
                    events={[
                        {title:'Data Exploration & EDA Workshop', date: '2025-09-10'},
                        {title:'Python Data Automation Challange', date: '2025-09-24'},
                        {title:'Machine Learning Workshop', date: '2025-10-29'},
                        {title:'Production Workshop', date: '2025-11-12'},
                        {title:'Power BI Report Competition', date: '2025-11-26'}
                    ]}
                    
            
            />

            </div>
            
            
            

        </div>

    </section>

    );
}