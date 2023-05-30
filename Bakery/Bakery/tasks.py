from celery import shared_task

@shared_task
def process_order(order_id):
    pass
    # order = Order.objects.get(id=order_id)
    # order.status = 'Processed'
    # order.save()

# to start
# celery -A proj worker --loglevel=info