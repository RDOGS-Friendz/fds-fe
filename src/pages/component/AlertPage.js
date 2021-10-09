import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Banner from '../../components/Banner';
import Banner2 from '../../components/Banner2';
import Toast from '../../components/Toast';
import Toast2 from '../../components/Toast2';
import Toast3 from '../../components/Toast3';
import Notification from '../../components/Notification';

function AlertPage() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bannerWarningOpen, setBannerWarningOpen] = useState(true);
  const [bannerErrorOpen, setBannerErrorOpen] = useState(true);
  const [bannerSuccessOpen, setBannerSuccessOpen] = useState(true);
  const [bannerInfoOpen, setBannerInfoOpen] = useState(true);
  const [banner2WarningOpen, setBanner2WarningOpen] = useState(true);
  const [banner2ErrorOpen, setBanner2ErrorOpen] = useState(true);
  const [banner2SuccessOpen, setBanner2SuccessOpen] = useState(true);
  const [banner2InfoOpen, setBanner2InfoOpen] = useState(true);
  const [toastWarningOpen, setToastWarningOpen] = useState(true);
  const [toastErrorOpen, setToastErrorOpen] = useState(true);
  const [toastSuccessOpen, setToastSuccessOpen] = useState(true);
  const [toastInfoOpen, setToastInfoOpen] = useState(true);
  const [toast2WarningOpen, setToast2WarningOpen] = useState(true);
  const [toast2ErrorOpen, setToast2ErrorOpen] = useState(true);
  const [toast2SuccessOpen, setToast2SuccessOpen] = useState(true);
  const [toast2InfoOpen, setToast2InfoOpen] = useState(true);
  const [toast3WarningOpen, setToast3WarningOpen] = useState(true);
  const [toast3ErrorOpen, setToast3ErrorOpen] = useState(true);
  const [toast3SuccessOpen, setToast3SuccessOpen] = useState(true);
  const [toast3InfoOpen, setToast3InfoOpen] = useState(true);
  const [notificationWarningOpen, setNotificationWarningOpen] = useState(true);
  const [notificationErrorOpen, setNotificationErrorOpen] = useState(true);
  const [notificationSuccessOpen, setNotificationSuccessOpen] = useState(true);
  const [notificationInfoOpen, setNotificationInfoOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Alert & Banner ✨</h1>
            </div>

            <div className="border-t border-gray-200">

              {/* Components */}
              <div className="space-y-8 mt-8">

                {/* Banner */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Banner</h2>
                  <div className="space-y-3">

                    <Banner type="warning" open={bannerWarningOpen} setOpen={setBannerWarningOpen}>
                      We’re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.
                    </Banner>

                    <Banner type="success" open={bannerSuccessOpen} setOpen={setBannerSuccessOpen}>
                      We’re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.
                    </Banner>                  

                    <Banner type="error" open={bannerErrorOpen} setOpen={setBannerErrorOpen}>
                      We’re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.
                    </Banner>

                    <Banner open={bannerInfoOpen} setOpen={setBannerInfoOpen}>
                      We’re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.
                    </Banner>                                                      

                  </div>
                </div>

                {/* Banner 2 */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Banner 2</h2>
                  <div className="space-y-3">

                    <Banner2 type="warning" open={banner2WarningOpen} setOpen={setBanner2WarningOpen}>
                      We’re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.
                    </Banner2>

                    <Banner2 type="success" open={banner2SuccessOpen} setOpen={setBanner2SuccessOpen}>
                      We’re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.
                    </Banner2>                  

                    <Banner2 type="error" open={banner2ErrorOpen} setOpen={setBanner2ErrorOpen}>
                      We’re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.
                    </Banner2>

                    <Banner2 open={banner2InfoOpen} setOpen={setBanner2InfoOpen}>
                      We’re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.
                    </Banner2> 

                  </div>
                </div>

                {/* Toast */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Toast</h2>
                  <div className="space-y-3">

                    <Toast type="warning" open={toastWarningOpen} setOpen={setToastWarningOpen}>
                      A warning toast.
                    </Toast>

                    <Toast type="success" open={toastSuccessOpen} setOpen={setToastSuccessOpen}>
                      A successful toast.
                    </Toast>                  

                    <Toast type="error" open={toastErrorOpen} setOpen={setToastErrorOpen}>
                      A dangerous toast.
                    </Toast>

                    <Toast open={toastInfoOpen} setOpen={setToastInfoOpen}>
                      An informational toast.
                    </Toast> 

                  </div>
                </div>

                {/* Toast 2 */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Toast 2</h2>
                  <div className="space-y-3">

                    <Toast2 type="warning" open={toast2WarningOpen} setOpen={setToast2WarningOpen}>
                      A warning toast.
                    </Toast2>

                    <Toast2 type="success" open={toast2SuccessOpen} setOpen={setToast2SuccessOpen}>
                      A successful toast.
                    </Toast2>                  

                    <Toast2 type="error" open={toast2ErrorOpen} setOpen={setToast2ErrorOpen}>
                      A dangerous toast.
                    </Toast2>

                    <Toast2 open={toast2InfoOpen} setOpen={setToast2InfoOpen}>
                      An informational toast.
                    </Toast2> 

                  </div>
                </div>

                {/* Toast 3 */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Toast 3</h2>
                  <div className="space-y-3">

                    <Toast3 type="warning" open={toast3WarningOpen} setOpen={setToast3WarningOpen}>
                      A warning toast.
                    </Toast3>

                    <Toast3 type="success" open={toast3SuccessOpen} setOpen={setToast3SuccessOpen}>
                      A successful toast.
                    </Toast3>                  

                    <Toast3 type="error" open={toast3ErrorOpen} setOpen={setToast3ErrorOpen}>
                      A dangerous toast.
                    </Toast3>

                    <Toast3 open={toast3InfoOpen} setOpen={setToast3InfoOpen}>
                      An informational toast.
                    </Toast3>

                  </div>
                </div>

                {/* Notification */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Notification</h2>
                  <div className="space-y-3">

                    <Notification type="warning" open={notificationWarningOpen} setOpen={setNotificationWarningOpen}>
                      <div className="font-medium text-gray-800 mb-1">Merged Pull Request</div>
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.</div>
                    </Notification>

                    <Notification type="success" open={notificationSuccessOpen} setOpen={setNotificationSuccessOpen}>
                      <div className="font-medium text-gray-800 mb-1">Merged Pull Request</div>
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.</div>
                    </Notification>                  

                    <Notification type="error" open={notificationErrorOpen} setOpen={setNotificationErrorOpen}>
                      <div className="font-medium text-gray-800 mb-1">Merged Pull Request</div>
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.</div>
                    </Notification>

                    <Notification open={notificationInfoOpen} setOpen={setNotificationInfoOpen}>
                      <div className="font-medium text-gray-800 mb-1">Merged Pull Request</div>
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.</div>
                    </Notification>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default AlertPage;