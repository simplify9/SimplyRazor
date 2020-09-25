using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public class Debouncer
    {
        private List<CancellationTokenSource> StepperCancelTokens = new List<CancellationTokenSource>();
        private readonly int millisecondsToWait;
        private readonly object _lockThis = new object(); // Use a locking object to prevent the debouncer to trigger again while the func is still running

        public Debouncer(int millisecondsToWait = 300)
        {
            this.millisecondsToWait = millisecondsToWait;
        }

        public async Task Debouce(Action func)
        {
            CancelAllStepperTokens(); // Cancel all api requests;
            var newTokenSrc = new CancellationTokenSource();

            lock (_lockThis)
            {
                StepperCancelTokens.Add(newTokenSrc);
            }
            await Task.Delay(millisecondsToWait, newTokenSrc.Token).ContinueWith(task => // Create new request
            {
                if (!newTokenSrc.IsCancellationRequested) // if it hasn't been cancelled
                {
                    CancelAllStepperTokens(); // Cancel any that remain (there shouldn't be any)
                    StepperCancelTokens = new List<CancellationTokenSource>(); // set to new list
                    lock (_lockThis)
                    {
                        func(); // run
                    }
                }
            });
        }

        private void CancelAllStepperTokens()
        {
            foreach (var token in StepperCancelTokens)
                if (!token.IsCancellationRequested)
                    token.Cancel();
        }
    }

}
